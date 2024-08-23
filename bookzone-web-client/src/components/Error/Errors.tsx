interface Props {
  msg: string;
}

const Errors = ({ msg }: Props) => {
  return (
    <div className="flex border border-slate-100 bg-slate-200 rounded-lg text-center m-5 justify-center">
      <p className="font-normal text-red-800 self-center items-center p-3">
        {msg}
      </p>
    </div>
  );
};

export default Errors;
