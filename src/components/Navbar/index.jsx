import React, {useState, useRef} from 'react';
import Logo from '../Logo/index.jsx';
import CartImage from '../CartImage/index.jsx';
import {
   StyledHeader,
   StyledHeaderNavbarContainer,
   StyledHeaderNavbarContainerCenter, StyledHeaderNavbarContainerLeft,
   StyledHeaderNavbarContainerRight,
   StyledHeaderNavbarInnerContainer,
   StyledMobileCenterSection, StyledMobileTopNavLink,
   StyledMobileNavSection, StyledNavLinkCenter, StyledNavLinkRight,
   StyledSidePanel, StyledMobileBottomNavLink, StyledHamburger,
   StyledHamburgerItemContainer, StyledLogoLink, StyledSpan,

} from '../../styles/Navbar.styled.jsx';
import {
   centerLinks,

   mobileTopLinks,

} from '../../assets/links/links.js';
import {ShoppingCartOutlined} from '@ant-design/icons';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const sidePanelRef = useRef(null);

   const handleIsMenuOpen = () => {
      setIsMenuOpen(!isMenuOpen);
      `${isMenuOpen}` ? sidePanelRef.current.classList.toggle('side__panel--open') :
         sidePanelRef.current.classList.toggle('side__panel--close');
   }

   return (
      <StyledHeader>
         <StyledHeaderNavbarContainer>
            <StyledHeaderNavbarInnerContainer>
               <StyledHeaderNavbarContainerLeft>
                  <StyledLogoLink to='/'>
                     <Logo/>
                  </StyledLogoLink>
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
                  <StyledNavLinkRight
                     to='/cart'>
                     <CartImage />
                     <StyledSpan>2</StyledSpan>
                  </StyledNavLinkRight>
                  <StyledNavLinkRight
                     to='/sign-in'>
                     Get Started
                  </StyledNavLinkRight>
               </StyledHeaderNavbarContainerRight>
               <StyledHamburgerItemContainer>
                  <StyledHamburger size={40} toggle={handleIsMenuOpen}
                                   toggled={isMenuOpen} color='hsl(196, 77%, 55%)' rounded/>
               </StyledHamburgerItemContainer>
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
                     <StyledMobileBottomNavLink to='/cart' onClick={handleIsMenuOpen}
                                                activeclassname='active'>
                        <CartImage />
                        <StyledSpan>2</StyledSpan>
                     </StyledMobileBottomNavLink>
                     <StyledMobileBottomNavLink to='/sign-in' onClick={handleIsMenuOpen}
                                                activeclassname='active'>Get Started</StyledMobileBottomNavLink>
                  </StyledMobileNavSection>
               </StyledSidePanel>
            </StyledHeaderNavbarInnerContainer>
         </StyledHeaderNavbarContainer>
      </StyledHeader>

   );
}