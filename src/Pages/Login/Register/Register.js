import React, { useState } from "react";
import loginimg from "../../../images/login.png";
import { NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegistrationSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }

    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      location,
      history
    );

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
          Register &nbsp;
          <span className="bi bi-person-plus-fill text-success"></span>
        </h5>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            {user.email && (
              <div className="alert alert-success" role="alert">
                <span className="fas fa-clipboard-check me-2"></span>
                Registration successfull
              </div>
            )}
            <form onSubmit={handleRegistrationSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleOnBlur}
                  required
                  label="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
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
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  required
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password2" className="form-label">
                  Re-type Password
                </label>
                <input
                  required
                  label="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="password2"
                />
              </div>

              <button type="submit" className="btn btn-dark">
                Submit
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-secondary ms-2"
              >
                <span className="bi bi-google "> </span>
                Register With Google
              </button>
            </form>
            {authError && (
              <div className="alert alert-danger mt-3" role="alert">
                <span className="fas fa-exclamation-circle"></span>
                {authError}
              </div>
            )}
            <hr />
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <button className="btn border border-success">
                Already Registered? Please Login
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

export default Register;
