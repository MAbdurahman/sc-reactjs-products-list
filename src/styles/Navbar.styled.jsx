
import {NavLink} from 'react-router-dom';
import {Squash} from 'hamburger-react';
import styled from 'styled-components';


export const StyledHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   min-height: 80px;
   width: 100%;
   background-color: var(--color-neutral-800);
   border-bottom: 3px solid var(--color-bright-blue-01-700);

`;

export const StyledHeaderNavbarContainer = styled.div`
   position: relative;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding-right: 16px;
   padding-left: 16px;

   @media screen and (min-width: 576px) {
      max-width: 544px;
   }
   @media screen and (min-width: 768px) {
      max-width: 720px;
   }
   @media screen and (min-width: 992px) {
      max-width: 960px;
   }
   @media screen and (min-width: 1200px) {
      max-width: 1144px;
   }
   @media screen and (min-width: 1400px) {
      max-width: 1320px;
   }

`;

export const StyledHeaderNavbarInnerContainer = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-top: 0.5em;

`;

export const StyledHeaderNavbarContainerLeft = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   flex: 1;

   @media only screen and (max-width: 820px) {
      justify-content: flex-start;
   }

`;

export const StyledHeaderNavbarContainerCenter = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   flex: 1;

   @media only screen and (max-width: 820px) {
      display: none;
   }
`;

export const StyledHeaderNavbarContainerRight = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   flex: 1;

   @media only screen and (max-width: 820px) {
      display: none;
   }

`;

export const LogoImage = styled.img`
   max-width: 208px;
   width: 100%;
   z-index: 20;
   min-width: 64px;
   padding-bottom: 1em;


   @media (max-width: 820px) {
      position: relative;
      
   }

   @media (max-width: 768px) {
      position: relative;

   }

   @media (max-width: 540px) {
      
   }
`;

export const StyledLogoLink = styled(NavLink)`
        text-decoration: none;
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
   &:focus,
   &.active {
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
      &:focus,
      .active {
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
   &:focus,
   .active {
      color: hsl(196, 77%, 55%);
   }

   @media (max-width: 820px) {
      display: none;
   }
`;


export const StyledHamburgerItemContainer = styled.div`
   z-index: 99;
   display: none;
   
   @media (max-width: 820px) {
      display: flex;
      justify-content: flex-end;
      width: 48px;
      max-width: 48px;
   }

   @media (max-width: 768px) {
      
   }
   @media (max-width: 550px) {
      
   }

   @media (max-width: 435px) {
      
   }
   @media (max-width: 405px) {
      
   ;
   }
   @media (max-width: 380px) {
      
   }
`

export const StyledHamburger = styled(Squash)`
   display: none;

   @media (max-width: 820px) {
      position: relative;
      z-index: 99;
      color: hsl(196, 77%, 55%);
      font-size: large;
      display: block;
   }

`;

export const StyledSidePanel = styled.div`
   display: none;

   @media (max-width: 820px) {
      position: fixed;
      top: 80px;
      right: 0;
      width: 100%;
      z-index: 90;
      height: calc(100dvh - 64px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 1rem;
      flex: 1;
      background: hsl(210, 0%, 18%);
      background: var(--color-neutral-800);
      transition: transform 0.333s cubic-bezier(.17, .67, .83, .67);


   }
   @media (max-width: 550px) {
      top: 80px;

   }
   @media (max-width: 395px) {
      top: 80px;
   }
`;


export const StyledMobileNavSection = styled.div`
   width: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 0.25rem;
   flex: 1;
   gap: 0.25rem;
   margin-top: -5em;
   margin-left: auto;
   margin-right: auto;
   font-size: 2rem;
`;

export const StyledMobileTopNavLink = styled(NavLink)`

   @media (max-width: 820px) {
      text-decoration: none;
      font-weight: 800;
      color: hsl(210, 0%, 98%);
      margin-left: auto;
      margin-right: auto;
      transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

      &.${(props) => props.activeclassname} {
         color: hsl(196, 77%, 55%);
      }

      &:hover,
      &:active,
      &:focus.
      &.active {
         color: hsl(196, 77%, 55%);
      }

   }

`;

export const StyledMobileCenterSection = styled.div`
   position: relative;
   height: 10%;
   width: 100%;
   visibility: hidden;

`;

export const StyledMobileBottomNavLink = styled(NavLink)`
   @media (max-width: 820px) {

      text-decoration: none;
      font-weight: 800;
      color: hsl(210, 0%, 98%);
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 0.5em;
      transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

      &:last-child {
         background: hsl(196, 77%, 55%);
         padding: 0.5rem 1rem;
         border-radius: 24px;

         &:hover,
         &:active,
         &:focus,
         &.active {
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
      &:focus,
      &.active {
         color: hsl(196, 77%, 55%);
      }
   }
`;