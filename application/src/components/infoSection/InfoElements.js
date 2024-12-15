import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #d0f0fd, #add8e6); /* Stylish light blue gradient */
  padding: 40px 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffcc33, #ff9900); /* Yellow to orange gradient */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25); /* Professional shadow effect */
  border-radius: 20px;
  transition: all 0.4s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05); /* Interactive hover effect */
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #ffb347, #ffcc33); /* Slightly lighter hover gradient */
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
  color: #ff6f00; /* Vibrant orange color */
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2); /* Add depth */
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: 1.5px;
`;

export const Subtitle = styled.h5`
  color: #ffd700; /* Bright yellow */
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 3px;
  margin-top: 10px;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15); /* Stylish shadow for better visibility */
`;
