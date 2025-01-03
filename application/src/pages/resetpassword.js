import React, { useState } from "react";
import Footer from "../components/footer";
import  ResetPassword from "../components/signin/resetpassword";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ResetPassword />
      <Footer />
    </>
  );
};

export default SigninPage;
