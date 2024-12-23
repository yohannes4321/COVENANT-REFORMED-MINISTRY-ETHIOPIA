import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//import Context from '../context/index'; // Your Context file
//import loginIcons from '../assest/signin.gif';
//import SummaryApi from '../common/index'; // Your API setup
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { ButtonBasic } from "../ButtonElements";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  //const { fetchUserDetails } = useContext(Context); // Make sure Context is providing the fetchUserDetails

  // Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://crms-website-backend.onrender.com/api/signin", {
        method: 'POST', // Should be 'POST'
        headers: { "Content-Type": "application/json" },
        credentials: 'include', // If you're using cookies for authentication
        body: JSON.stringify(data), // Send email and password in body
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        //fetchUserDetails(); // Fetch user details after login success
        navigate('/books'); // Redirect user to homepage or dashboard
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong!");
      toast.error(error)
    }
  };

  return (
    
      <SigninContainer>
        <SigninWrapper>
          <div id="login"  >
            <div  >
              <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">Login</h1>
  
              <form onSubmit={handleSubmit}>
                 
                <SigninP>Email</SigninP>
                  <SigninInput
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    required
                    className="w-full p-3 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
               
  
                <div className="mb-6">
                  <SigninP>Password</SigninP>
                  <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md">
                    <SigninInput
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleOnChange}
                      required
                      className="w-full p-3 bg-gray-100 border-none rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer p-2 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
  
                <div className="flex justify-end mb-4">
                  <Link to="/forgot_password" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
                </div>
  
                <ButtonBasic
  type="submit"
  className="hover"
>
  Login
</ButtonBasic>

              </form>
  
              <p className="text-center mt-6 text-gray-700">
                Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </SigninWrapper>
      </SigninContainer>
    );
    
};

export default Signin;