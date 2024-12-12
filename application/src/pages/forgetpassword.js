import React, { useState } from "react";
import Footer from "../components/footer";
import Forgotpassword from "../components/signin/forgot_password";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

const ForgetPassword = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Forgotpassword />
      <Footer />
    </>
  );
};

export default ForgetPassword;
