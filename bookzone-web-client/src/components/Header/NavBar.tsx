// Nav bar

import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  console.log(location);

  const getLink = (path: string) => {
    return location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-700"
      : "text-slate-500";
  };
  return (
    <nav className="fixed start-0 bg-white  w-full border-b border-gray-300 p-3 shadow-md z-20">
      <div className="flex flex-wrap items-center justify-center">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={`block py-2 px-3 text-gray-900  md:p-0 ${getLink(
                  "/"
                )}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howto"
                className={`block py-2 px-3 text-gray-900  md:p-0 ${getLink(
                  "/howto"
                )}`}
              >
                How to Use
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
