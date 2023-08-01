import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/Images/Image";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../Components/Button/Button";

const Login = () => {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      MatricOrID: "",
      password: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      MatricOrID: Yup.string()
        .max(20, "Matric No/Staff ID must be 20 characters or less")
        .required("Matric No/Staff ID is required."),
      password: Yup.string().required("Password is required."),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      //   "Invalid Password"
      // ),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
      navigate("/home");
    },
  });
  //   console.log(formik.errors);
  const navigate = useNavigate();

  return (
    <form onSubmit={formik.handleSubmit} className="loginform">
      <div className="containerlogin">
        <img id="Ellipse" src={Image.Ellipse} alt="" />
        <img id="oaulogo" src={Image.Oaulogo} alt="" />
        <div className="matricdiv">
          <p id={formik.errors.MatricOrID ? "pformatric" : "displaynone"}>
            {formik.errors.MatricOrID && formik.errors.MatricOrID}
          </p>
          <input
            className="inputLogin login1"
            name="MatricOrID"
            type="text"
            placeholder="Matric No/Staff ID"
            value={formik.values.MatricOrID}
            onChange={formik.handleChange}
          />
        </div>
        <p id={formik.errors.password ? "pforpassword" : "displaynone"}>
          {formik.errors.password && formik.errors.password}
        </p>
        <input
          className={`inputLogin login2`}
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <div id="forgotpasslogin">
          <label
            className="labelpass"
            onClick={() => {
              navigate("/Forgotpassword");
            }}
          >
            Forgot password
          </label>
        </div>

        <button className="button_login">Login</button>
      </div>
    </form>
  );
};

export default Login;
