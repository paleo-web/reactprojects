import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Link } from "react-router-dom";
function Form() {
  //showing alert if all fields are empty
  const [showAlert, setShowAlert] = useState({
    status: false,
    message: "",
  });

  // storing data in local storage Array of object
  const [details, setDetails] = useState([]);

  // storing data in local storage with object
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // getting data from local storage and storing it in useState details 
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (details) {
      setDetails(details);
    }
  }, [form]);


  
  // toast notification
  const notify = () => toast("Your work has been saved");

  // handling form submit 
  const handleSumbit = (e) => {
    e.preventDefault();

    // showing alert if all fields are empty
    if (!form.name || !form.email || !form.message) {
      
      setShowAlert({
        status: true,
        message: "All fields are required",
      });

      return;
    }

    //calling toast notification
    notify();

    // storing one object with Id
    const newId = {...form,id: uuidv4()}    

    //storing all object 
    const newArry = [...details, newId];

    //setting data to localstrage
    localStorage.setItem("details", JSON.stringify(newArry));

    //empty the form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleDelete = (index) => {
    const newArry = details.filter((item, i) => i !== index);
    localStorage.setItem("details", JSON.stringify(newArry));
    setDetails(newArry);
  };


  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSumbit}>
        {showAlert.status ? (
          <div
            id="alert-1"
            className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
              {showAlert.message}
              <a
                href="#"
                className="font-semibold underline hover:no-underline"
              ></a>
            </div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        ) : null}

        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
            type="text"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Roll Number
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                UserEmail
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                RollNumber
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Action
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {
            // showing data in table if not found  
            details < 1 ? (
              <tr>
                <td className="px-6 py-4 text-3xl text-gray-900">
                  No data found
                </td>
              </tr>
            ) : (
              details.map((value, ind) => {
                return (
                  <tr
                    key={ind}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {value.name}
                    </th>
                    <td className="px-6 py-4">{value.email}</td>
                    <td className="px-6 py-4">{value.message}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(ind)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      >
                        <svg
                          className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                          />
                        </svg>
                      </button>
                    </td>

                    <td>
                      <Link
                        to={`/edit/${value.id}`}
                        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                      >
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
