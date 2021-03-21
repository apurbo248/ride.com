import React, { useState, useContext, useRef } from "react";
import { Button, Container} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import { UserContext } from "../../App";
import {
  googleSIgnInHandler,
  initiateLoginFramework,
  facebookSignInHandler,
  createAccountWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./ManageLogin";
import { useHistory, useLocation } from "react-router";


// Messages
const required = "This field is required";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const Login = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const [newUser, setNewUser] = useState(false);
  const [loogedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  initiateLoginFramework();
  handleSubmit();
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  const handleGoogleSignIn = () => {
    googleSIgnInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleFbSignIn = () => {
    facebookSignInHandler().then((res) => {
      handleResponse(res, true);
    });
  };
  const onSubmit = (data) => {
    setUser(data);
    if (newUser && data.name && data.email && data.password) {
      createAccountWithEmailAndPassword(
        data.name,
        data.email,
        data.password
      ).then((res) => {
        handleResponse(res, false);
      });
    }
    if (!newUser && data.email && data.password) {
      signInWithEmailAndPassword(data.email, data.password).then((res) => {
        handleResponse(res, true);
      });
    }
  };

  return (
    <Container>
      <div className="form-container ">
        <h4 onClick={() => setNewUser(!newUser)}
              className="text-success btn-link border-0 "
            >
              {!newUser ? "Login" : "Sign up"}</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="form m-auto">
          {newUser && (
            <input
            className="form-control w-50"
              name="name"
              type="text"
              ref={register({ required: true })}
              placeholder="Name"
              required
            />
          )}
          {errors.name && errorMessage(required)}

          <br />
          <input
            className="form-control w-50"
            name="email"
            type="text"
            ref={register({ required: "enter a valid email" })}
            placeholder="Enter your email"
            message="you must enter an valid email"
            required
          />
          {errors.email &&
            errors.email.type === "required" &&
            errorMessage(required)}
          <br />
          <input
           className="form-control w-50"
            name="password"
            type="password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            placeholder="Enter your Password"
            required
          />
          {errors.password && errorMessage(errors.password.message)}
          <br />

          {newUser && (
            <input
            className="form-control w-50"
              name="password_repeat"
              type="password"
              ref={register({
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              placeholder="Confirm Password"
            />
          )}
          {errors.password_repeat &&
            errorMessage(errors.password_repeat.message)}
          <br />

          <input
          
          className="form-control w-50 btn btn-warning"
            type="submit"
            value={newUser ? "sign up" : "log in"}
          />
          <br />

          <span className="d-flex align-items-center mx-auto fs-3">
            {newUser ? "Already have an account ?" : "Don't have an account?"}
            <button
              onClick={() => setNewUser(!newUser)}
              className="text-danger btn-link border-0 bg-light"
            >
              {!newUser ? "sign up" : "login"}
            </button>
          </span>
        </form>
        {/* {user.success ? (
          <h5 className="text-success text-center mt-3">
            user {newUser ? "created" : "logged in"} successfully
          </h5>
        ) : (
          <h5 className="text-danger text-center mt-3">{user.error}</h5>
        )} */}
      </div>
      <div className="app-authentication">
        <div className="google">
          <Button className="mb-2 app-btn d-flex align-items-center justify-content-between" onClick={handleGoogleSignIn} variant="info">
            <i className="fab fa-lg fa-google"></i>Continue with google
          </Button>
        </div>
        <div className="facebook">
          <Button className="app-btn d-flex align-items-center justify-content-between" onClick={handleFbSignIn} variant="primary">
            <i className="fab fa-lg fa-facebook"></i>Continue with facebook
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
