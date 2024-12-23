import React from "react";
import { HeroContainer, HeroContent, HeroBtnWrapper, HeroBg } from "./HeroElements";
import logo from "../../images/logo (6).jpg"; // Import the image

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Add the logo image here */}
      <HeroBg>
        <img src={logo} alt="Hero Background" className="hero-image" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">
          COVENANT REFORMED MINISTRY ETHIOPIA
        </h1>
        <p className="hero-text">
          Church revitalization
        </p>
         
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
