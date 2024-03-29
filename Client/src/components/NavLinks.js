import React from "react";



import brand from "../assets/vr-glasses2.png"
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  IconImage
} from "../styled-components/NavbarStyle";
import {connect} from "react-redux"


function NavLinks(props) {
  
  const checkLogin = localStorage.getItem("jsonwebtoken")
  return (
   
          <>
             <Nav>
              <NavLogo to="/">
              <IconImage src={brand} alt="" />
              </NavLogo>
              <Bars />
  
              <NavMenu>
             

                  <NavLink to="/products" activeStyle>
                      Products
                    
                  </NavLink>

                  <NavLink to="/cart" activeStyle>
                      Cart
                  </NavLink>

                  <NavLink to="/contact" activeStyle>
                      Contact
                  </NavLink>

                  <NavLink to="/account" activeStyle>
                     Account
                  </NavLink>

                
                  <NavLink to="/login" activeStyle>
                      Login
                  </NavLink>
                  
                  <NavBtn>
                      <NavBtnLink to="/register">Sign Up</NavBtnLink>                
                  </NavBtn>
              </NavMenu> 
             </Nav> 
          </>
      );
  };



const mapStateToProps = (state) => {
	return {
	  isLoggedIn: state.isLoggedIn,
	};
  };

export default connect(mapStateToProps)(NavLinks);
