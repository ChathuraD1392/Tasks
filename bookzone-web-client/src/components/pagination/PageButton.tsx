interface Props {
  pageNumber: number;
  handleClick: () => void;
  active: string;
}
const PageButton = ({ pageNumber, active, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={
        "flex items-center justify-center m-1 p-3 w-8 h-8 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-white" +
        active
      }
    >
      {pageNumber}
    </button>
  );
};

export default PageButton;
