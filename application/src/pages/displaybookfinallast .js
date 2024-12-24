import React, { useState } from "react";
import Footer from "../components/footer";
import BookDisplay from "../pages/displaybookfinal";
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
      <BookDisplay />
      <Footer />
    </>
  );
};

export default ForgetPassword;
