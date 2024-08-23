interface Props {
  message: string;
  isShowing: boolean;
  onClose: () => void;
}

const Toast = ({ message, isShowing, onClose }: Props) => {
  return (
    <>
      {isShowing && (
        <div className="fixed top-16 right-5 bg-blue-500 text-white p-4 rounded shadow-lg">
          <div className="flex justify-between items-center">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-lg font-bold">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
