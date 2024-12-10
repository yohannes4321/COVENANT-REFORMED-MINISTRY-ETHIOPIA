import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
   
} from "./SigninElements";
import {ButtonBasic} from "../ButtonElements"
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message

    try {
      const response = await axios.post("http://localhost:8000/api/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        // Save token in localStorage or cookies
        const { token, user } = response.data.user;
        localStorage.setItem("authToken", token);

        // Navigate to the dashboard or another page
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        // Error from server
        setError(error.response.data.message || "Signin failed.");
      } else {
        // Network error
        setError("Unable to connect to the server.");
      }
    }
  };

 
    return (
      <SigninContainer>
        <SigninWrapper>
          <form onSubmit={handleSignin} style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
            
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            
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
  
            <ButtonBasic type="submit" style={{ width: "100%", marginTop: "20px" }}>
              Sign In
            </ButtonBasic>
            
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Link to="/forgot_password" style={{ color: "#007bff", textDecoration: "none" }}>
                Forgot your password?
              </Link>
            </div>
          </form>
        </SigninWrapper>
      </SigninContainer>
    );
  };
  
  export default SignInPage;