import { useFormik } from "formik";
import * as yup from "yup";


import function Form() {
  const formValidationSchema = yup.object({
    email: yup
      .string()
      .min(5, "need a longer email")
      .max(20, "too much email")
      .required(),

    password: yup
      .string()
      .min(5, "need a longer password")
      .max(10, "too much password")
      .required(),
  });


  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="enter your email"
      ></input>
      {formik.errors.email}
      <br />
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="enter your password"
      ></input>
      <br />
      {formik.errors.password}
      <br />
      <button type="sumbit">submit</button>

    </form>
  );
}
