import React, {useState, useRef} from 'react';
import Logo from '../Logo/index.jsx';
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
   MobileNavSection,
   MobileCenterSection
} from '../../styles/Navbar.styled.jsx'
import {centerLinks, rightLinks, mobileTopLinks, mobileBottomLinks} from '../../assets/links/links.js';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const sidePanelRef = useRef(null);

   const handleMenuOpen = () => {
      setIsMenuOpen(!isMenuOpen);
      sidePanelRef.current.classList.toggle('side__panel--open');
      sidePanelRef.current.classList.toggle('side__panel--close');
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
               <MobileNavSection>
                  {mobileTopLinks.map((link) => (
                     <StyledMobileNavLinkTop key={link.id} to={link.path} onClick={handleMenuOpen} activeclassname='active'>{link.name}</StyledMobileNavLinkTop>
                  ))
                  }
                  <MobileCenterSection />
                  {mobileBottomLinks.map((link) => (
                     <StyledMobileNavLinkBottom key={link.id} to={link.path} onClick={handleMenuOpen} activeclassname='active'>{link.name}</StyledMobileNavLinkBottom>
                  ))
                  }
               </MobileNavSection>
            </StyledSidePanel>
         </div>
      </section>
   );
}