import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { ButtonBasic } from "../ButtonElements";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message

    if (password !== conformpassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("https://crms-website-backend.onrender.com/api/signup", {
        fullname,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        toast.success('Signed up successfully');
        navigate("/books");
      }
    } catch (error) {
      if (error.response) {
        // Error from server
        setError(error.response.data.message || "Signup failed.");
      } else {
        // Network error
        setError("Unable to connect to the server.");
      }
      toast.error(error.response.data.message || "Signup failed.");
    }
  };

  return (
    <SigninContainer>
      <SigninWrapper>
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Sign Up</h2>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <SigninP>Full Name:</SigninP>
          <SigninInput
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <SigninP>Email:</SigninP>
          <SigninInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <SigninP>Password:</SigninP>
          <SigninInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <SigninP>Confirm Password:</SigninP>
          <SigninInput
            type="password"
            placeholder="Confirm your password"
            value={conformpassword}
            onChange={(e) => setConformPassword(e.target.value)}
            required
          />

          <ButtonBasic type="submit" style={{ width: "100%", marginTop: "20px" }}>
            Sign Up
          </ButtonBasic>

          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <Link to="/signin" style={{ color: "#007bff", textDecoration: "none" }}>
              Already have an account? Sign In
            </Link>
          </div>
        </form>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default SignUpPage;
