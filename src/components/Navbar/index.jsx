import React, {useState, useRef} from 'react';
import Logo from '../Logo/index.jsx';
import {
   StyledHeader,
   StyledHeaderNavbarContainer,
   StyledHeaderNavbarContainerCenter, StyledHeaderNavbarContainerLeft,
   StyledHeaderNavbarContainerRight,
   StyledHeaderNavbarInnerContainer,
   StyledMobileCenterSection, StyledMobileTopNavLink,
   StyledMobileNavSection, StyledNavLinkCenter, StyledNavLinkRight,
   StyledSidePanel, StyledMobileBottomNavLink, StyledHamburger,
   StyledHamburgerItemContainer

} from '../../styles/Navbar.styled.jsx';
import {
   centerLinks,
   rightLinks,
   mobileTopLinks,
   mobileBottomLinks
} from '../../assets/links/links.js';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const sidePanelRef = useRef(null);

   const handleIsMenuOpen = () => {
      setIsMenuOpen(!isMenuOpen);
      sidePanelRef.current.classList.toggle('side__panel--open');
      sidePanelRef.current.classList.toggle('side__panel--close');
   }


   console.log(isMenuOpen)
   return (
      <StyledHeader>
         <StyledHeaderNavbarContainer>
            <StyledHeaderNavbarInnerContainer>
               <StyledHeaderNavbarContainerLeft>
                  <Logo/>
               </StyledHeaderNavbarContainerLeft>
               <StyledHeaderNavbarContainerCenter>
                  {
                     centerLinks.map((link) => (
                        <StyledNavLinkCenter key={link.id} to={link.path}
                                             activeclassname='active'>{link.name}</StyledNavLinkCenter>
                     ))
                  }
               </StyledHeaderNavbarContainerCenter>
               <StyledHeaderNavbarContainerRight>
                  {
                     rightLinks.map((link) => (
                        <StyledNavLinkRight key={link.id} to={link.path}
                                            activeclassname='active'>{link.name}</StyledNavLinkRight>
                     ))
                  }
               </StyledHeaderNavbarContainerRight>
               <StyledHamburger size={40} toggle={handleIsMenuOpen}
                                toggled={isMenuOpen} color='hsl(196, 77%, 55%)' rounded/>
               <StyledSidePanel ref={sidePanelRef}
                                className={isMenuOpen ? 'side__panel--open' : 'side__panel--close'}>
                  <StyledMobileNavSection>
                     {
                        mobileTopLinks.map((link) => (
                           <StyledMobileTopNavLink key={link.id} to={link.path} onClick={handleIsMenuOpen}
                                                   activeclassname='active'>{link.name}</StyledMobileTopNavLink>
                        ))
                     }
                     <StyledMobileCenterSection/>
                     {
                        mobileBottomLinks.map((link) => (
                           <StyledMobileBottomNavLink key={link.id} to={link.path} onClick={handleIsMenuOpen}
                                                      activeclassname='active'>{link.name}</StyledMobileBottomNavLink>
                        ))
                     }
                  </StyledMobileNavSection>
               </StyledSidePanel>

            </StyledHeaderNavbarInnerContainer>
         </StyledHeaderNavbarContainer>
      </StyledHeader>


   );
}