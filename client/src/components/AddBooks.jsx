import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AddBooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const HandleCreate = async (e) => {
    e.preventDefault();
    try {
      const bookData = new FormData();
      bookData.append("name", name);
      bookData.append("author", author);
      bookData.append("price", price);
      console.log("name is :", name);

      const { data } = await axios.post("add-books", bookData);
      if (data?.success) {
        console.log(data);
        navigate("/get-books");
      } else console.log(data.message);
    } catch (error) {
      console.log("error occured", error);
    }
  };
  return (
    <div>
      <Header />
      <section className="bg-[rgb(63, 9, 81)] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex text-white items-center mb-6 text-2xl font-semibold  dark:text-white"
          >
            <img className="w-20 h-20 mr-2 " src="./../logo.svg" alt="logo" />
            Page Turner
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Books
              </h1>
              <form method="post">
                <div className="text-start">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Book Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Book Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="text-start">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Author
                  </label>
                  <input
                    type="text"
                    value={author}
                    placeholder="Enter Author Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="text-start">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Price
                  </label>
                  <input
                    type="Number"
                    value={price}
                    placeholder="Enter Price "
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-12 text-black bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={HandleCreate}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBooks;
