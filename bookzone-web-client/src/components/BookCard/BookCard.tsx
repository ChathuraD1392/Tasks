// Book card component

export interface Book {
  title: string;
  category: string;
  author: string;
  description: string;
  year: number;
  cover: File | null;
}

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  // take imgage source from the backend
  const coverUrl = book.cover
    ? `http://127.0.0.1:8000/${book.cover}`
    : "/path/to/placeholder.png";

  return (
    <>
      <div className=" bg-slate-200 rounded-md shadow max-w-60 max-h-full ml-2 mr-2 text-center border border-slate-400">
        <img
          className="rounded-t-lg w-60 h-56"
          src={coverUrl}
          alt="cardImage"
        />
        <div className="pl-4 pr-4">
          <h4 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
            {book.title}
          </h4>
          <p className=" text-gray-700 font-normal">{book.description}</p>
          <h4 className=" text-lg font-normal tracking-tight text-gray-900">
            {"Author - " + book.author}
          </h4>
          <h5 className="text-sm font-bold tracking-tight text-gray-900">
            {"Category - " + book.category}
          </h5>
          <h5 className=" text-sm font-bold text-gray-800">{book.year}</h5>
        </div>
      </div>
    </>
  );
};

export default BookCard;
