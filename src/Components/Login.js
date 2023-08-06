import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggeduser = localStorage.getItem("authenticated");
    if (loggeduser) {
      navigate("/dashboard");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    return setEmail(e.target.value);
  }
  function handlePassword(e) {
    return setPassword(e.target.value);
  }

  async function login(e) {
    e.preventDefault();

    axios
      .post("https://rfpdemo.velsof.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.response === "success") {
          localStorage.setItem("authenticated", res.data.token);

          navigate("/dashboard");
        } else {
          toast.error(res.data.error);
        }
      });
  }

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <a href="" className="text-dark">
          <i className="fas fa-home h2"></i>
        </a>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-12">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome to RFP System!</h5>
                        <p>Sign in to continue</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="p-2">
                    <form className="form-horizontal" action="index.html">
                      <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter Email"
                          onChange={handleEmail}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                          onChange={handlePassword}
                        />
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                          onClick={login}
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href=""
                              className="social-list-item bg-primary text-white border-primary"
                            >
                              <i className="mdi mdi-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href=""
                              className="social-list-item bg-info text-white border-info"
                            >
                              <i className="mdi mdi-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href=""
                              className="social-list-item bg-danger text-white border-danger"
                            >
                              <i className="mdi mdi-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 text-center">
                        <NavLink  to="/registervendor" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i> Register as
                          Vendor
                        </NavLink>
                      </div>
                      <div className="mt-4 text-center">
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i> Forgot your
                          password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    &copy; Copyright{" "}
                    <i className="mdi mdi-heart text-danger"></i> RFP System
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000}></ToastContainer>
    </>
  );
}

export default Login;
