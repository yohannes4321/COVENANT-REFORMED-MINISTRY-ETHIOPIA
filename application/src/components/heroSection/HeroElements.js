import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: linear-gradient(
        135deg,
        #add8e6, /* light blue */
        #ffd700, /* yellow */
        #ff8c00  /* orange */
    );
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(0, 0, 0, 0.3) 100%
        );
        z-index: 2;
        animation: gradientShift 5s infinite alternate;
    }

    @keyframes gradientShift {
        0% {
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(0, 0, 0, 0.3) 100%
            );
        }
        100% {
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(0, 0, 0, 0.4) 100%
            );
        }
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 3rem;
        color: #ffffff;
        text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
        transition: color 0.3s ease-in-out;
        &:hover {
            color: #ff4500;
        }
    }

    p {
        margin-top: 24px;
        color: #ffffff;
        font-size: 1.5rem;
        text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
        max-width: 600px;
    }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;
export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroButton = styled.button`
    margin-top: 32px;
    padding: 12px 30px;
    font-size: 1.2rem;
    color: #fff;
    background: linear-gradient(90deg, #ff7f50, #ff4500);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-transform: uppercase;

    &:hover {
        background: linear-gradient(90deg, #ff4500, #ff7f50);
        box-shadow: 0 4px 15px rgba(255, 69, 0, 0.5);
        transform: scale(1.05);
    }
`;
