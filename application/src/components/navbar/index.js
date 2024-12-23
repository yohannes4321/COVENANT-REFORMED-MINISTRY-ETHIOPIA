import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLeft,
  NavBtnRight,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/logo (6).jpg"; // Import the image

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="Logo" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="ACTS">ACTS</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="ACRFC">ACRFC</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="ACREM">ACREM</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="ACPMM">ACPMM</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="ACRCM">ACRCM</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">Partners</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Donate">Donate</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtnLeft>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtnLeft>
        <NavBtnRight>
          <NavBtnLink to="/books">Courses</NavBtnLink>
          <NavBtnLink to="/admin/upload">Upload</NavBtnLink>
        </NavBtnRight>
      </NavbarContainer>
    </Nav>
  );
};
