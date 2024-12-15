import styled from "styled-components";

export const SigninContainer = styled.div`
    height: 100vh;
    background: linear-gradient(135deg, #add8e6, #fef9c3); /* Light blue to soft yellow */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SigninWrapper = styled.div`
    background: linear-gradient(135deg, #fff, #f8efd4); /* White to soft orange accent */
    min-height: 600px;
    width: 500px;
    max-width: 90%;
    margin: auto;
    border-radius: 20px; /* Softer corners */
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* Add depth with shadow */
    padding: 25px;
    border: 2px solid #f9a826; /* Stylish orange border */
`;

export const SigninP = styled.p`
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 20px; /* Slightly larger text */
    color: #ff8c00; /* Orange for vibrant accents */
    text-align: center; /* Center align for headings */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Subtle text shadow */
`;

export const SigninInput = styled.input`
    width: 100%;
    padding: 15px 18px; /* More padding for comfort */
    border-radius: 12px; /* Softer corners */
    border: solid 1px #ddd;
    margin-bottom: 20px;
    font-size: 16px;
    background: #fff; /* Clean input background */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
    transition: all 0.3s;

    &:focus {
        border-color: #ff8c00; /* Orange border on focus */
        background: #fff7e6; /* Soft yellow background on focus */
        box-shadow: 0 4px 8px rgba(255, 140, 0, 0.2); /* Enhance shadow on focus */
        outline: none;
    }
`;

export const SigninButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #ffa726, #ff7043); /* Dynamic yellow-orange gradient */
    border: none;
    border-radius: 12px; /* Rounded corners */
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Add depth with shadow */
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.05); /* Slight zoom effect */
        box-shadow: 0 8px 15px rgba(255, 140, 0, 0.4); /* Deeper shadow on hover */
    }
`;

export const SigninTitle = styled.h1`
    font-size: 28px;
    color: #6a11cb; /* Light purple for accent */
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 1px 2px 3px rgba(106, 17, 203, 0.3); /* Dynamic shadow */
`;
