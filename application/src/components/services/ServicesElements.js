import styled from "styled-components";

export const ServicesContainer = styled.div`
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#ADD8E6, #87CEFA); /* Light blue gradient */
    padding: 50px 0;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px 50px;
    }
`;

export const ServicesCard = styled.div`
    background: #FFA500; /* Decorative orange box */
    color: #fff; /* White text for contrast */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px; /* Rounded corners */
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Shadow for depth */
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05); /* Slight zoom effect on hover */
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
    }
`;

export const ServicesIcon = styled.img`
    height: 120px; /* Adjusted size for better visuals */
    width: 120px;
    margin-bottom: 20px;
    border: 5px solid #fff; /* White border around the image */
    border-radius: 50%; /* Circular image */
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000080; /* Navy color for header text */
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1.5rem; /* Increased font size */
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
    color: #fff; /* White text for better visibility */
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff; /* White text */
    font-weight: 500;
`;

export const ServicesLink = styled.a`
    text-decoration: none; /* Removes underline */
    color: #FFA500; /* Light yellow color for links */
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #FFD700; /* Slightly lighter yellow on hover */
    }
`;
