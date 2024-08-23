import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../data/categories";
import { useEffect, useState } from "react";
import { Book } from "../BookCard/BookCard";
import Toast from "../Toast/Toast";
import apiClient from "../../services/api-client";
import Errors from "../Error/Errors";

// form validation - zod
// handle data fetching - axios
// styling elements - tailwindcss

const schema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 character" })
    .max(25),
  author: z
    .string()
    .min(3, { message: "Author must be at least 3 characters" })
    .max(20),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  year: z
    .number({ invalid_type_error: "Year is required" })
    .min(1900)
    .max(2024),
  cover: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "File is required")
    .refine(
      (files) => files[0]?.size <= 5000000,
      "File size should be less than 5MB"
    )
    .refine(
      (files) => ["image/jpeg", "image/png"].includes(files[0]?.type),
      "Only .jpg or .png files are allowed"
    ),
});

type FormData = z.infer<typeof schema>;

const AddBookForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const newBook: Book = {
      title: data.title,
      category: data.category,
      author: data.author,
      description: data.description,
      year: data.year,
      cover: data.cover[0],
    };
    console.log(newBook);
    setBook(newBook);
  };

  useEffect(() => {
    if (book) {
      const formData = new FormData();
      formData.append("title", book.title);
      formData.append("category", book.category);
      formData.append("author", book.author);
      formData.append("description", book.description);
      formData.append("year", String(book.year));
      if (book.cover !== null) formData.append("cover", book.cover);

      apiClient
        .post("api/books/create/", formData)
        .then((response) => {
          console.log("Book uploaded successfully:", response.data);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            navigate("/");
          }, 400);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [book]);

  return (
    <div className="pt-20">
      {error && <Errors msg={error} />}
      <form
        className="w-96 mx-auto border rounded-lg pl-9 pr-9 pt-4 pb-4"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <h2 className="text-2xl font-bold mb-4">Add Book Details</h2>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Book title"
          />
          {errors.title && (
            <p className="text-red-500 font-normal text-sm">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Author
          </label>
          <input
            {...register("author")}
            type="text"
            id="author"
            placeholder="Book author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.author && (
            <p className="text-red-500 font-normal text-sm">
              {errors.author.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="">Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 font-normal text-sm">
              {errors.category.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            rows={2}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Book description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 font-normal text-sm">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Year
          </label>
          <input
            {...register("year", { valueAsNumber: true })}
            type="number"
            id="year"
            placeholder="Book year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.year && (
            <p className="text-red-500 font-normal text-sm">
              {errors.year.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="cover"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Cover (A photo of a front cover)
          </label>
          <input
            {...register("cover")}
            className=" text-gray-400 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-sm text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none"
            type="file"
            id="formFile"
          />
          {errors.cover && (
            <p className="text-red-500 font-normal text-sm">
              {errors.cover.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 "
          >
            Submit
          </button>
        </div>
      </form>

      <Toast
        message="Submitted Succeccfully"
        isShowing={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default AddBookForm;
