import Button from "../../Components/Button/Button";
import Image from "../../Components/Image";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  //Formik Logics
  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      MatricOrID: "",
      password: "",
      session: "2022/2023",
      semester: "HAMMATTAN",
    },

    //Validate Form
    validationSchema: Yup.object({
      MatricOrID: Yup.string()
        .max(20, "Matric No/Staff ID must be 20 characters or less")
        .required("Matric No/Staff ID is required."),
      password: Yup.string().required("Password is required"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      //   "Invalid Password"
      // ),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <img id="Ellipse" src={Image.Ellipse} alt="" />
          <img id="oaulogo" src={Image.OAULogo} alt="" />
          <p id="pformatric">
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
          <p id="pforpassword">
            {formik.errors.password && formik.errors.password}
          </p>
          <input
            className="inputLogin login2"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <select
            name="session"
            id="select"
            className="firstselect"
            value={formik.values.session}
            onChange={formik.handleChange}
          >
            <option>2022/2023</option>
            <option>2021/2022</option>
            <option>2020/2021</option>
            <option>2019/2020</option>
            <option>2018/2019</option>
            <option>2017/2018</option>
            <option>2016/2017</option>
            {/* <option>2015/2016</option>
            <option>2014/2015</option>
            <option>2013/2014</option>
            <option>2012/2013</option>
            <option>2011/2012</option>
            <option>2010/2011</option>
            <option>2009/2010</option>
            <option>2008/2009</option>
            <option>2007/2008</option>
            <option>2006/2007</option> */}
          </select>
          <select
            name="semester"
            id="select"
            value={formik.values.semester}
            onChange={formik.handleChange}
          >
            <option>HAMMATTAN</option>
            <option>RAIN</option>
          </select>
          <a href="">Forgot password</a>
          <div className="loginButtonsDiv">
            <Button>Login as Admin</Button>
            <Button id="studentbutton">Login as Student</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
