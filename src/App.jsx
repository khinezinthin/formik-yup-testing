import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// formik => init
// form => html form lo pl | special formik feature twy par ml
// field => input
// errorMessage => error

const App = () => {
  // 1 formik htl hmr initialValues thet hmat pay ya | br twy a twat ll d data d value a twat pl lote ml
  // 2 formik htl hmr function ta khu return pyan pay ya
  // 3 formik htl hmr onSubmit so pee values twy u lox ya

  // 4 validation a twat 2 myo sit lox ya
  // validate => custom win sit | validationSchema library use pee chate lox ya

  // 5 errorMessage so pee htote pya lox ya custom css a twat component thet hmat pay lox ll ya
  // formik hmr error ko bl lo event so ma pya so pee pay lox ya eg:validateOnChange={false}

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format "),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
        "Password must contain at least one uppercase letter and one special character"
      ),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        // CUSTOM VALITDATE
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "email is Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }

        //   if (!values.password) {
        //     errors.password = "password is Required";
        //   }
        //   return errors;
        // }}

        // USE LIBRARY VALIDATE
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="flex flex-col w-72 m-5 gap-4 border border-green-400 p-5 rounded-md">
              <label htmlFor="email">Email</label>
              <Field
                className={
                  " border border-green-500 focus:outline-none rounded-md py-1 px-2"
                }
                type={"email"}
                name={"email"}
                id={"email"}
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-red-500"
              />

              <label htmlFor="password">Password</label>
              <Field
                className={
                  " border border-green-500 focus:outline-none rounded-md py-1 px-2"
                }
                type={"password"}
                name={"password"}
                id={"password"}
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className="text-red-500"
              />

              <button
                className=" bg-green-400 rounded-md py-2 text-white"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default App;
