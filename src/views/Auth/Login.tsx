import React, { useContext, useEffect, useState } from "react";
import { Alert, FormLabel, FormGroup } from "react-bootstrap";
import { Redirect } from "react-router";
import { LOGIN_USER } from "../../context/actions/actionTypes";
import { AuthContext } from "../../context/contexts/Auth/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import BasicFooter from "../../components/Footer/BasicFooter";

const Login = (props: any) => {
  // dummy error
  const [error, setError] = useState({ error: false, msg: "" });

  // formik usage
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: ({ login, password }) => {
      let credentails = localStorage.getItem("credentails");
      if (typeof credentails === "string") {
        const [passwordLocal, emailLocal] = JSON.parse(credentails);
        if (password === passwordLocal && login === emailLocal) {
          dispatch({ type: LOGIN_USER });

          setError({ error: false, msg: "" });
          localStorage.setItem("LoggedIn", JSON.stringify(true));
        } else {
          setError({ error: true, msg: "Invalid credentails Try again" });
          return;
        }
      }

      return;
    },
  });

  const { isLoggedIn, dispatch } = useContext(AuthContext);

  let credentails = localStorage.getItem("credentails");
  let loggedInstate = localStorage.getItem("LoggedIn");
  if (typeof loggedInstate === "string") {
    if (JSON.parse(loggedInstate)) {
      dispatch({ type: LOGIN_USER });
    }
  }

  if (typeof credentails === "string") {
  } else {
    localStorage.setItem(
      "credentails",
      JSON.stringify(["password", "admin@email.com"])
    );
  }

  if (isLoggedIn) {
    props.history.push("/");
  }

  return (
    <div
      className={
        props.location.pathname === "/login"
          ? "wrapper login-form-container"
          : "wrapper"
      }>
    <div className="container justify-content-md-center">
      <h1>Human Resource System</h1>
      <h2>One Network</h2>
      <form onSubmit={handleSubmit} className="loginform">
        {error.error ? (
          <Alert>
            <span>
              <b> {error.msg}</b>
            </span>
            <button type="button" aria-hidden="true" className="close">
              &#x2715;
            </button>
          </Alert>
        ) : null}
        <FormGroup>
          <FormLabel>Email</FormLabel>
          {/*  Check Event types .. */}

          {touched.login && errors.login ? (
            <Alert>
              <span>
                <b> {errors.login}</b>
              </span>
            </Alert>
          ) : null}
          <input
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            name="login"
            autoComplete="false"
            className="form-control"
            type="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          {touched.password && errors.password ? (
            <Alert>
              <span>
                <b> {errors.password}</b>
              </span>
            </Alert>
          ) : null}
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            autoComplete="false"
            className="form-control"
            type="password"
            required
          />
        </FormGroup>
        <FormGroup>
          <input
            type="submit"
            className="form-control form-submit"
            value="LOGIN"
          />
        </FormGroup>
      </form>
    </div>
    <BasicFooter/>
    </div>
  );
};

export default Login;
