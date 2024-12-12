import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">How it works</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="#">acts23mints@gmail.com</FooterLink>
            <FooterLink href="#">+251-985671368</FooterLink>
            <FooterLink href="#">+251913146794</FooterLink>
            <FooterLink href="#">+251911884916</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Programs </FooterH2>
            <FooterLink href="#">ACTS</FooterLink>
            <FooterLink href="#">ACRFC</FooterLink>
            <FooterLink href="#">ACREM</FooterLink>
            <FooterLink href="#">ACRPM</FooterLink>
            <FooterLink href="#">ACRMC</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- CRME -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
