import { useEffect, useState } from "react";
import BookCard, { Book } from "../components/BookCard/BookCard";
import Filter from "../components/Filter/Filter";
import apiClient from "../services/api-client";
import Errors from "../components/Error/Errors";
import PageButton from "../components/pagination/PageButton";

interface ResponseData {
  total_pages: number;
  books: Book[];
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const [countPages, setCountPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = () => {
      const categoryParam = selectedCategory
        ? `&filter=${selectedCategory}`
        : "";
      apiClient
        .get<ResponseData>(
          `api/books/?page=${currentPageNumber}${categoryParam}`
        )
        .then((res) => {
          setCountPages(res.data.total_pages);
          setBooks(res.data.books);
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchBooks();
  }, [currentPageNumber, selectedCategory]);

  console.log(countPages);

  let pageCount = [];
  for (let i = 1; i <= countPages; i++) pageCount.push(i);

  return (
    <>
      <div className="flex">
        <div className="flex-grow pt-14 pb-14 container mx-auto p-4">
          <div className="flex flex-col">
            <div className=" bg-white p-1 self-center">
              <div className="sm:flex justify-between">
                <div className="sm:flex">
                  <h2 className="text-2xl font-bold mb-1 p-2">All Books</h2>
                  <Filter
                    onSelectCategory={(category) =>
                      setSelectedCategory(category)
                    }
                  />
                </div>
                <a
                  href="/addbook"
                  className="sm:flex items-center self-center p-2 justify-center h-8 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-lg hover:bg-blue-700 hover:text-white hover:border-white"
                >
                  Add a Book
                </a>
              </div>
              <div className="grid gap-4 mt-2 mb-3 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {books.map((book, index) => (
                  <BookCard book={book} key={index} />
                ))}
              </div>
              {error && <Errors msg={error} />}
              {books.length === 0 && !error && (
                <Errors msg="There's no any books in the Database" />
              )}
              {pageCount.length >= 2 && (
                <div className="fixed bottom-0 left-0 w-full text-white text-center p-16 flex justify-center">
                  {pageCount.map((pageNumber, index) => (
                    <PageButton
                      key={index}
                      pageNumber={pageNumber}
                      handleClick={() => setCurrentPageNumber(pageNumber)}
                      active={
                        pageNumber === currentPageNumber
                          ? " bg-blue-600 text-white"
                          : " bg-white"
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
