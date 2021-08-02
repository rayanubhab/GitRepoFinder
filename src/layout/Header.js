import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import "../App.css";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {

  const context = useContext(UserContext)
  //Flip switch which toggles (hamburger menu when the window is contracted)

  const [isOpen,setIsOpen] = useState(false)

  const toggle = ()=> setIsOpen(!isOpen)

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand className>
        <Link to="/" className="text-white">
      <GitHubIcon /> GitRepoFinder
        </Link>
      </NavbarBrand>

      <NavbarText className="text-white">{
        context.user?.email ? context.user.email :""
      }</NavbarText>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
            context.user ? ( <NavItem>
              <NavLink onClick={()=>{context.setUser(null);
              }} className="text-white">Logout</NavLink>
             </NavItem>) : (
               <>
                <NavItem>
          <NavLink tag = {Link} to = "/signup" className="text-white">Signup</NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag = {Link} to = "/signin" className="text-white">Login</NavLink>
          </NavItem>
          </>
          )
          
          }
          
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
