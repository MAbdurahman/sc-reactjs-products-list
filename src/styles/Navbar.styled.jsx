import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoImage = styled.img`
  width: 208px;
  align-self: flex-start;
   flex: 1;
   @media (max-width: 900px) {
      width: 128px;
   }
`;

export const NavbarWrapper = styled.nav`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1em;
   background: hsl(210, 0%, 18%);
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
   @media (max-width: 748em) {
      flex-direction: column;
      padding: 1rem;
      font-size: 1.5rem;
   }
`;

/*
export const NavbarWrapper = styled.nav`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: hsl(210, 0%, 18%);
   padding: 1em;
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
   @media (max-width: 704px) {
      flex-direction: column;
      padding: 1rem;
      font-size: 1.5rem;

   }
`;

export const NavLinkWrapper = styled.div`
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
  @media (max-width: 704px) {
    display: ${(props) => (!props.active ? 'none' : 'block')};
    text-align: center;
    padding: 2rem 0;
     transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
   font-weight: 800;
  color: hsl(210, 0%, 98%);
  margin-left: 2rem;
  transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
   
  &:last-child {
    background: hsl(196, 77%, 55%);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    &:hover {
      color: hsl(210, 0%, 98%)
    }
    &.${(props) => props.activeclassname} {
      color: hsl(210, 0%, 98%);
    }
  }

  &.${(props) => props.activeclassname} {
    color: hsl(196, 77%, 55%);
  }

  &:hover {
    color: hsl(196, 77%, 55%);
  }

  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: hsl(210, 0%, 98%);;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 704px){
    display: block;
  }
`;*/