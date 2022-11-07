import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { BASE_URL } from "../constant";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Login = () => {
  const navigate = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate.push("/dashboard");
    }
  };

  const handleTokenSave = ({ user, tokens }) => {
    localStorage.setItem("token", tokens?.access?.token);
    localStorage.setItem("user", JSON.stringify(user));
    navigate.push("/dashboard");
  };

  const handleSubimit = async () => {
    try {
      if (!email) {
        setEmailError("Email is required");
      }
      if (!password) {
        setPasswordError("Password is required");
      } else {
        setIsLoading(true);
        setPasswordError("");
        setEmailError("");
        const response = await axios.post(`${BASE_URL}/v1/auth/login`, {
          email,
          password,
        });
        setIsLoading(false);
        toast.success("Login successful!");
        handleTokenSave(response?.data);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Invalid Credentials");
      console.log("error", error);
    }
  };

  return (
    <section class="vh-100">
      <div class="container-fluid" style={{ height: "100%" }}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form style={{ marginTop: "70px" }}>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {emailError.length > 0 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Email is required
                  </p>
                )}
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {passwordError.length > 0 && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Password is required
                  </p>
                )}
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                {isLoading ? (
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleSubimit}
                  >
                    Login
                  </button>
                )}

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/register" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Login;
