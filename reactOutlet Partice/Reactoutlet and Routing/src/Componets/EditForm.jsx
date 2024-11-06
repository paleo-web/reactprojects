import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';

function EditForm() {
    const {id} = useParams();
    const navigating = useNavigate();

    const [showAlert, setShowAlert] = useState({
        status: false,
        message: "",
      });
      

    const [details, setDetails] = useState([]);
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    const updatingEdit = details.find((item) => item.id == id);
    setForm(updatingEdit);    
  }, []);

    const notify = () => toast("Your work has been saved");
    const handleSumbit = (e) => {
        e.preventDefault();
        
        // showing alert if all fields are empty
        if (!form.name || !form.email || !form.message) {
          
          setShowAlert({
            status: true,
            message: "All fields are required",
          });
        }

        //getting all saved user and filtering that bring all user just leave one that the id matches than again sending to localstorage
        const takingFormStorage = JSON.parse(localStorage.getItem("details"));
        const filtering = takingFormStorage.filter((item) => item.id != id);
        const newArry = [...filtering, form];
        localStorage.setItem("details", JSON.stringify(newArry));
        setDetails(newArry);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        
        
        notify();
        navigating("/contact");
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
          Update data
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default EditForm
