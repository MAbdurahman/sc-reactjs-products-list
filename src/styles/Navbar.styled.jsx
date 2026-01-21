import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {Squash, Squash as Hamburger} from 'hamburger-react';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1em;
   background: hsl(210, 0%, 18%);
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);
   @media (max-width: 820px) {
      flex-direction: column;
      padding: 1rem;
      font-size: 1.5rem;
   }
`;

export const LogoImage = styled.img`
   max-width: 208px;
   width: 100%;
   min-width: 64px;
   padding-bottom: 1em;

   @media (max-width: 820px) {
      position: relative;
      left: calc(-150% + 10px);
   }

   @media (max-width: 768px) {
      position: relative;

   }

   @media (max-width: 540px) {
      left: calc(-100% + 20px);
      width: 128px;
      padding-right: calc(3% + 4px);
   }
`;

export const LeftItems = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
`;

export const CenterItems = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
`;

export const RightItems = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   flex: 1;

`;

export const HamburgerItem = styled.div`
   position: absolute;
   top: calc(9dvh - 99%);
   right: calc(8dvw + 8px);
   z-index: 99;
   display: none;
   align-items: flex-end;
   justify-content: center;
   flex: 1;
   padding-right: 1em;

   @media (max-width: 820px) {
      top: calc(10dvh - 92px);
      display: flex;
   }

   @media (max-width: 768px) {
      top: calc(10vh - 80px);
      display: flex;
   }
`;

export const StyledNavLinkCenter = styled(NavLink)`
   text-decoration: none;
   font-weight: 800;
   color: hsl(210, 0%, 98%);
   margin-left: 2em;
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

   &.${(props) => props.activeclassname} {
      color: hsl(196, 77%, 55%);
   }

   &:hover,
   &:active,
   &:focus {
      color: hsl(196, 77%, 55%);
   }

   @media (max-width: 820px) {
      display: none;
   }
`;

export const StyledNavLinkRight = styled(NavLink)`
   text-decoration: none;
   font-weight: 800;
   color: hsl(210, 0%, 98%);
   margin-left: 2em;
   padding-bottom: 0.5em;
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

   &:last-child {
      background: hsl(196, 77%, 55%);
      padding: 0.5rem 1rem;
      border-radius: 24px;

      &:hover,
      &:active,
      &:focus {
         color: hsl(210, 0%, 98%)
      }

      &.${(props) => props.activeClassname} {
         color: hsl(210, 0%, 98%);
      }
   }

   &.${(props) => props.activeClassname} {
      color: hsl(196, 77%, 55%);
   }

   &:hover,
   &:active,
   &:focus {
      color: hsl(196, 77%, 55%);
   }

   @media (max-width: 820px) {
      display: none;
   }
`;

export const StyledHamburger = styled(Squash)`
   z-index: 99;
   color: hsl(196, 77%, 55%);
   font-size: large;
   visibility: hidden;
   
   @media (max-width: 820px) {
      top: 30%;
      display: inline-block;
   }
`;


export const StyledSidePanel = styled.div`
      display: none;

   @media (max-width: 820px) {
      position: fixed;
      top: 99px;
      right: -25%;
      right: 0;
      width: 100%;
      height: calc(100dvh - 64px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 1rem;
      flex: 1;
      background: hsl(210, 0%, 18%);
      
   }
   @media (max-width: 820px) {

   }
`;


export const MobileTopSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   row-gap: 0.25rem;
   flex: 1;
   gap: 0.25rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
   margin-top: -5em;
   font-size: 2rem;
`;

export const StyledMobileNavLinkTop = styled.div`

   @media (max-width: 820px) {
      text-decoration: none;
      font-weight: 800;
      color: hsl(210, 0%, 98%);
      margin-left: 2em;
      transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

      &.${(props) => props.activeclassname} {
         color: hsl(196, 77%, 55%);
      }

      &:hover,
      &:active,
      &:focus {
         color: hsl(196, 77%, 55%);
      }
      
   }
   
`;

export const StyledMobileNavLinkBottom = styled.div`
   @media (max-width: 820px) {

      text-decoration: none;
      font-weight: 800;
      color: hsl(210, 0%, 98%);
      margin-left: 2em;
      padding-bottom: 0.5em;
      transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

      &:last-child {
         background: hsl(196, 77%, 55%);
         padding: 0.5rem 1rem;
         border-radius: 24px;

         &:hover,
         &:active,
         &:focus {
            color: hsl(210, 0%, 98%)
         }

         &.${(props) => props.activeClassname} {
            color: hsl(210, 0%, 98%);
         }
      }

      &.${(props) => props.activeClassname} {
         color: hsl(196, 77%, 55%);
      }

      &:hover,
      &:active,
      &:focus {
         color: hsl(196, 77%, 55%);
      }
      
   }
   
`;

export const MobileCenterSection = styled.div`
   position: relative;
   height: 10%;
   width: 100%;
   visibility: hidden;

`;

export const MobileBottomSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   row-gap: 0.25rem;
   flex: 1;
   gap: 0.25rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 1;
   font-size: 2rem;
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