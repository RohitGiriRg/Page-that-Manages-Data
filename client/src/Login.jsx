import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const { email, password } = formData;
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <br />
      </form>
      <p>New to Internshala? </p>
      <Link to="/login" className="btn btn-default border w-100 bg-light">
        Sign up
      </Link>
    </div>
  );
};

export default Login;
