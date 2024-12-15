import styled from "styled-components";

export const FooterContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 15px;
    background: linear-gradient(#ADD8E6, #87CEFA); /* Light blue gradient */
`;

export const FooterWrapper = styled.div`
    max-width: 1100px; /* Increased max-width for better layout */
    margin: 0 auto; /* Centering content */
`;

export const FooterH2 = styled.h2`
    font-size: 1.5rem; /* Slightly larger font size */
    color: #000080; /* Navy color for contrast */
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center; /* Centering header text */
`;

export const FooterLink = styled.a`
    font-size: 1rem; /* Increased font size for better readability */
    text-decoration: none;
    color: #000080; /* Navy color for links */
    display: flex;
    transition: all 0.3s;

    &:hover {
        color: #FFA500; /* Orange hover effect */
    }
`;
