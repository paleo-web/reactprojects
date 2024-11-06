import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
// import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useDispatch } from "react-redux";
import { addToCountact } from "../Redux/countactSlice";
// import { Input , Checkbox , Button , Typography, Form , Select , Radio , InputNumber, Switch } from "antd";
// import { Form } from "antd";
function FormValidation() {
  const dispatch = useDispatch();
  // console.log(dispatch);
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        phonenumber: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().min(5, "Must be 5 or More").required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .min(5, "Must be 5 or More")
          .required("Required"),
        phonenumber: Yup.string()
          .min(12, "Must be 12 characters or less")
          .required("Required"),
      }),
      onSubmit: (values) => {
        const data = {
          ...values,
          id: Math.floor(Math.random() * 1000),
        };

        // countactReducer.push(data)
        dispatch(addToCountact(data));
        values.username = "";
        values.email = "";
        values.phonenumber = "";
      },
    });
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ "& > :not(style)": { m: 1, width: "80ch" } }}
      noValidate
      autoComplete="off"
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"white"}
    >
      <Box>
        <TextField
          className="w-full"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          name="username"
          id="standard-basic"
          label="Username"
          variant="standard"
        />
        <p className="text-red-500 w-full">
          {errors.username && touched.username && errors.username}
        </p>
      </Box>
      <Box>
        <TextField
          className="w-full"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <p className="text-red-500 w-full">
          {errors.email && touched.email && errors.email}
        </p>
      </Box>
      <Box>
        <TextField
          className="w-full"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phonenumber}
          name="phonenumber"
          id="standard-basic"
          label="phoneNumber"
          variant="standard"
        />
        <p className="w-full text-red-500">
          {errors.phonenumber && touched.phonenumber && errors.phonenumber}
        </p>
      </Box>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

      {/* <Button  type="submit" variant="contained" startIcon={<AddCircleOutlinedIcon />}>Submit</Button> */}
    </Box>
  );
}
export default FormValidation;
