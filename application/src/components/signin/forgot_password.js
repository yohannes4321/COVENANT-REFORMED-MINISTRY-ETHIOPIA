import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { ButtonBasic } from "../ButtonElements";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/forgot_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Please check your email to reset your password.");
        navigate("/signin");
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error during password reset request:", error);
    }
  };

  return (
    <SigninContainer>
      <SigninWrapper>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>

          <SigninP>Email:</SigninP>
          <SigninInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <ButtonBasic type="submit" style={{ width: "100%", marginTop: "20px" }}>
            Send
          </ButtonBasic>

          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <Link to="/signin" style={{ color: "#007bff", textDecoration: "none" }}>
              Back to Sign In
            </Link>
          </div>
        </form>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default ForgetPassword;
