import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <img
            className="w-20 h-20 mr-2 fill-white"
            src="./../logo.svg"
            alt="logo"
          />
        </div>
        <div className="text-white order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-indigo-500">
              <Link to={"/get-books"}>Books</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link to={"/add-books"}>Add Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
