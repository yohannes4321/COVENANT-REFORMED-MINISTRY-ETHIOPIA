import React, { useContext, useState } from 'react';
  // Correct the asset path if needed
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
 
import { toast } from 'react-toastify'; // To make pop-up notifications
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { ButtonBasic } from "../ButtonElements";

const ForgetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        
    });
    const navigate = useNavigate();
    

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        try {
            const dataRequest = await fetch('https://crms-website-backend-erc2.onrender.com/api/forget_password', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                // Ensure the body contains the necessary data for the request
                body: JSON.stringify(data)
            });
    
            const dataResponse = await dataRequest.json(); // Parse the JSON response
    
            if (dataResponse.success) {
                toast.success("Please check your email and click the link to change your password.");
    
                
            } else if (dataResponse.error) {
                toast.error(dataResponse.message); // Display the error message from the response
            }
        } catch (error) {
            // Catch any errors during the request and display an error notification
            toast.error("An error occurred. Please try again later.");
            console.error("Error during password reset request:", error);
        }
    };
    

    return (
      <SigninContainer>
        <SigninWrapper> 
        <div id="Forgot_password" >
            <div  >
            <h2 className=' text-center font-serif text-4xl '>Forgot Password </h2>

                <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <SigninP>Email</SigninP>
                        <div className="relative">
                            <SigninInput
                                type="email"
                                id="email"
                                placeholder="Enter Email"
                                name="email"
                                value={data.email}
                                required
                                onChange={handleOnChange}
                                className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-50 border border-gray-300"
                            />
                        </div>
                    </div>

                    
                    

                    

                    {/* Login Button */}
                    <ButtonBasic
                        type="submit"
                        className="bg-red-600 text-white py-2 px-6 rounded-full w-full max-w-[150px] mx-auto block hover:scale-105 hover:shadow-md text-center transition-transform"
                    >
                        Send
                    </ButtonBasic>
                </form>

               
            </div>
        </div></SigninWrapper> 
        </SigninContainer>
        
    );
};

export default ForgetPassword;