import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { ButtonBasic } from "../ButtonElements";

const backendapi = "http://localhost:8000";

const SummaryApi = {
  signUp: {
    url: `${backendapi}/api/signup`,
    method: "post",
  },
};

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    conformpassword: "",
    profilePic: "",
    role: "customer",
  });

  // To save the previous and current data
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit on click
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.conformpassword) {
      try {
        const response = await axios.post(SummaryApi.signUp.url, data, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        const datares = response.data;
        if (datares.success) {
          toast.success(datares.message);
          navigate('/dashboard');
        } else if (datares.error) {
          toast.error(datares.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Please check password and Confirm password. They are not identical.");
    }
  };

  return (
    <SigninContainer>
      <SigninWrapper>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <SigninP>Full Name:</SigninP>
            <SigninInput
              type="text"
              placeholder="Enter Your Full Name"
              name="fullname"
              value={data.fullname}
              onChange={handleOnChange}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <SigninP>Email:</SigninP>
            <SigninInput
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <SigninP>Password:</SigninP>
            <div className="bg-slate-200 p-2 gap-3 flex rounded-md items-center">
              <SigninInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={data.password}
                name="password"
                onChange={handleOnChange}
                required
              />
              <div
                className="cursor-pointer text-gray-600 hover:text-red-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <SigninP>Confirm Password:</SigninP>
            <div className="bg-slate-200 p-2 rounded-md flex items-center">
              <SigninInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={data.conformpassword}
                name="conformpassword"
                onChange={handleOnChange}
                required
              />
              <div
                className="cursor-pointer text-gray-600 hover:text-red-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>

          <ButtonBasic
            type="submit"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Sign Up
          </ButtonBasic>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-red-600 font-medium hover:underline">
            SignIn
          </Link>
        </p>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default SignUp;
