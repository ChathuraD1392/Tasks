const NavBar = () => {
  return (
    <nav className="bg-black p-3">
      <div className="flex space-x-4">
        <a
          href="#"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
          aria-current="page"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Home
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Team
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
