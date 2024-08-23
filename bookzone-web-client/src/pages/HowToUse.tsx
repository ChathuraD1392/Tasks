import addbook from "../assets/images/addbook.png";
import createbook from "../assets/images/createbook.png";
import view from "../assets/images/image1.png";
import filter from "../assets/images/filter.png";

const HowToUse = () => {
  return (
    <>
      <div className="pt-16 bg-slate 100 pl-9">
        <h2 className="font-bold text-slate-800 text-3xl self-center mb-4">
          Bookzone Web Application
        </h2>
        <p className="font-normal text-slate-500 text-lg mb-2">
          This project is created as an assignment. Basically the front end was
          developed by using React(typescript + Talwindcss). This is a Book
          store application which we can add and view. <br /> For the backend
          Django REST Framework is used. Only one model is created to use for
          two endpoints.
        </p>
        <h2 className="text-xl text-slate-700 mt-2 mb-4">
          <u> Used Technologies as a summary </u>
          <div className="flex justify-center mt-4">
            <div className="mr-4">
              <h3 className="mb-3 font-bold">
                <u>React</u>
              </h3>
              <ul className="list-disc pl-4 mb-3">
                <li>Form Validation - zod</li>
                <li>Data Fetching - React hook form</li>
                <li>Routing - react router dom</li>
                <li>Styling - Tailwindcss</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-bold">
                <u>Django</u>
              </h3>
              <ul className="list-disc pl-4 mb-3">
                <li>serializing</li>
                <li>filter</li>
                <li>pagination</li>
              </ul>
            </div>
          </div>
        </h2>
        <h2 className="text-slate-700 text-xl font-bold p-4 mb-3">
          Handling Application (steps)
        </h2>
        <div className="flex justify-between">
          <div className="mr-2 mb-2">
            <p className="mb-3 text-slate-700 font-bold">
              1 . Add a Book (using the blue button at the corner)
            </p>
            <img className="w-80" src={addbook} alt="addbook" />
          </div>
          <div className="mr-2 mb-2">
            <p className="text-slate-700 font-bold">2 . Add Book Details</p>
            <img className="w-64" src={createbook} alt="createBook" />
          </div>
          <div className="mr-2 mb-2">
            <p className="text-slate-700 font-bold">
              3 . View the exicting store
            </p>
            <img className="w-80" src={view} alt="homeview" />
          </div>
          <div className="mr-2 mb-2">
            <p className="text-slate-700 font-bold">4 . Filter categories</p>
            <img className="w-80" src={filter} alt="filter" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToUse;
