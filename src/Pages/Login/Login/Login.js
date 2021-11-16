import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import loginimg from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    console.log(loginData);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Navigation></Navigation>
      {isLoading && (
        <div className="w-100 text-center mt-5">
          <div
            className="spinner-grow text-secondary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="container mt-5">
        <h5 className="mb-4 text-dark">
          Log In &nbsp;
          <span className="bi bi-person-bounding-box text-success"></span>
        </h5>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            {user.email && (
              <div className="alert alert-success" role="alert">
                <span className="bi bi-check-circle-fill"></span>Login
                successfull
              </div>
            )}
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onChange={handleOnChange}
                  required
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onChange={handleOnChange}
                  required
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-dark">
                Submit
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-secondary ms-2 "
              >
                <span className="bi bi-google "> </span>
                Google Sign In
              </button>
            </form>
            {authError && (
              <div className="alert alert-danger mt-3" role="alert">
                <span className="bi bi-exclamation-circle-fill"></span> &nbsp;
                {authError}
              </div>
            )}
            <hr />
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <button className="btn border border-success">
                New User? Please Register
              </button>
            </NavLink>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid" src={loginimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
