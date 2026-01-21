import React, {useState, useRef} from 'react';
import Logo from '../Logo/index.jsx';
import {Link} from 'react-router-dom';
import {
   CenterItems,
   NavbarWrapper,
   StyledNavLinkCenter,
   StyledNavLinkRight,
   StyledMobileNavLinkTop,
   StyledMobileNavLinkBottom,
   LeftItems,
   RightItems,
   StyledHamburger,
   HamburgerItem,
   StyledSidePanel,
   MobileTopSection,
   MobileCenterSection,
   MobileBottomSection
} from '../../styles/Navbar.styled.jsx'
import {centerLinks, rightLinks, mobileTopLinks, mobileBottomLinks} from '../../assets/links/links.js';

import {Squash, Squash as Hamburger} from 'hamburger-react';


export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const sidePanelRef = useRef();

   const showSidePanel = () => {

      setIsMenuOpen(!isMenuOpen);
   }
   const handleMenuOpen = () => {
      setIsMenuOpen(!isMenuOpen);
      sidePanelRef.current.classList.toggle(
         'side__panel--open'
      );
      sidePanelRef.current.classList.toggle('side__panel--close')
   }
   return (
      <section className='utils-container-fluid navbar-section'>
         <div className='utils-container'>
            <NavbarWrapper>
               <LeftItems>
                  <Logo/>
               </LeftItems>

               <CenterItems>
                  {centerLinks.map((link) => (
                     <StyledNavLinkCenter key={link.id} to={link.path}>{link.name}</StyledNavLinkCenter>
                  ))
                  }
               </CenterItems>
               <RightItems>
                  {rightLinks.map((link) => (
                     <StyledNavLinkRight key={link.id} to={link.path}>{link.name}</StyledNavLinkRight>
                  ))
                  }
               </RightItems>

            </NavbarWrapper>
            <HamburgerItem>
               <StyledHamburger size={32} toggle={handleMenuOpen} toggled={isMenuOpen} color='hsl(196, 77%, 55%)' rounded  />

            </HamburgerItem>
            <StyledSidePanel ref={sidePanelRef} className={isMenuOpen ? 'side__panel--open' : 'side__panel--close'}>
               <MobileTopSection>
                  {mobileTopLinks.map((link) => (
                     <StyledMobileNavLinkTop key={link.id} to={link.path}>{link.name}</StyledMobileNavLinkTop>
                  ))
                  }
                  <MobileCenterSection />
                  {mobileBottomLinks.map((link) => (
                     <StyledMobileNavLinkBottom key={link.id} to={link.path}>{link.name}</StyledMobileNavLinkBottom>
                  ))
                  }
               </MobileTopSection>

               {/*<MobileBottomSection>

               </MobileBottomSection>*/}
            </StyledSidePanel>

         </div>

      </section>

   );
}