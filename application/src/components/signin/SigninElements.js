import styled from "styled-components";

export const SigninContainer = styled.div`
    height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Stylish gradient */
    align-content: center;
    justify-content: center;
    display: flex;
    position: relative;
`;

export const SigninWrapper = styled.div`
    background: #fff;
    min-height: 600px;
    width: 500px;
    max-width: 90%;
    margin: auto;
    border-radius: 20px; /* Softer corners */
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Add a shadow for depth */
    padding: 20px;
`;

export const SigninP = styled.p`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 18px; /* Slightly larger text */
    color: #333; /* Darker color for better contrast */
`;

export const SigninInput = styled.input`
    width: 100%;
    padding: 12px 15px; /* More padding for comfort */
    border-radius: 15px; /* Softer corners */
    border: solid #ddd 1px; /* Subtle border color */
    margin-bottom: 20px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
        border-color: #6a11cb; /* Accent border on focus */
        box-shadow: 0 4px 8px rgba(106, 17, 203, 0.2); /* Enhance shadow on focus */
        outline: none;
    }
`;
