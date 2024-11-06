import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function Form() {
  // storing data in local storage Array of object
  const [details, setDetails] = useState([]);

  // getting data from local storage and storing it in useState details
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (details) {
      setDetails(details);
    }
  }, []);

  // toast notification
  const notify = () => toast("Your work has been saved");

  // handling form submit

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(8, "Must be 3 characters or more")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required")
          .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid Email"
          ),
        message: Yup.string()
          .matches(
            /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
            "Invalid Phone number"
          )
          .required("valid phone number"),
      }),
      onSubmit: (values) => {
        // storing one object with Id
        const newId = { ...values, id: uuidv4() };

        //storing all object
        const newArry = [...details, newId];

        //setting data to localstrage
        localStorage.setItem("details", JSON.stringify(newArry));

        notify();
      },
    });

  const handleDelete = (index) => {
    const newArry = details.filter((item, i) => i !== index);
    localStorage.setItem("details", JSON.stringify(newArry));
    setDetails(newArry);
  };

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            //  placeholder="enter name"
            // required=""
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
          <p className="text-red-500 text-sm">
            {errors.name && touched.name && errors.name}
          </p>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            type="text"
            name="email"
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
          <p className="text-red-500 text-sm">
            {errors.email && touched.email && errors.email}
          </p>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.message}
            type="text"
            name="message"
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
          <p className="text-red-500 text-sm">
            {errors.message && touched.message && errors.message}
          </p>
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
                PhoneNumber
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-red-500 bg-gray-50 dark:bg-gray-800"
              >
                Delete
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-green-500 bg-gray-50 dark:bg-gray-800"
              >
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
              )
            }
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
