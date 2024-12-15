import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #add8e6, #87cefa); /* Light blue gradient */
  color: #fff; /* Default text color */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 30px;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #ffdd57, #ffaa4c); /* Yellow and orange gradient */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Dynamic shadow effect */
  border-radius: 20px;
  transform: scale(1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Subtle hover effect */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;
  color: #ff7f50; /* Orange color for the title */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add some depth */
`;

export const Subtitle = styled.h5`
  color: #ffeb3b; /* Bright yellow for the subtitle */
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Slight shadow for more depth */
`;
