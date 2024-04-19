import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Header from "./Header";
const Books = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const { data } = await axios.get("/get-books");
      if (data?.success) setBooks(data.books);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      var answer = window.prompt("Are You Sure Want to Delete this Product ? ");
      if (!answer) return;

      const { data } = await axios.delete(`/remove-book/${id}`);

      if (data?.success) {
        console.log("success ", data);

        const updatedBooks = books.filter((b) => b._id !== id);
        setBooks(updatedBooks);
        enqueueSnackbar("Book has successfully Deleted", {
          variant: "success",
        });
      } else console.log(data.message);
    } catch (error) {
      console.log("error occured", error);
      toast.error("Something Went wrong");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <SnackbarProvider />
      <Header />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-1/2 mx-96 my-48 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Author</div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center">Price</div>
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.name}
                </th>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/update-book/${book._id}`}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDelete(book._id)}
                    class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Books;
