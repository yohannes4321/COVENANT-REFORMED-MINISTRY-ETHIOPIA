import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #ADD8E6; /* Always light blue */
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all ease 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    color: #ffa500;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%; /* Make the logo circular */
    object-fit: cover; /* Ensure the logo fits well */
    margin-right: 10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 3px solid #ffa500;
  }

  &:hover {
    color: #ffa500;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLeft = styled(NavBtn)`
  margin-right: auto;
`;

export const NavBtnRight = styled(NavBtn)`
  margin-left: auto;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: linear-gradient(90deg, #ffd700, #ffa500);
  white-space: nowrap;
  padding: 12px 28px; /* Increased padding for larger size */
  color: #010606;
  font-size: 1.1rem; /* Slightly larger font size */
  font-weight: 900;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ffffff;
    color: #ffa500;
    transition: all 0.2s ease-in-out;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
