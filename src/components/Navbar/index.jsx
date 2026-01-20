import React, {useState} from 'react';
import Logo from '../Logo/index.jsx';
import {Link} from 'react-router-dom';
import {
   CenterItems,
   NavbarWrapper,
   StyledNavLinkCenter,
   StyledNavLinkRight,
   LeftItems,
   RightItems,
   StyledHamburger,
   HamburgerItem
} from '../../styles/Navbar.styled.jsx'
import {centerLinks, rightLinks} from '../../assets/links/links.js';

import {Squash, Squash as Hamburger} from 'hamburger-react';


export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

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
               <StyledHamburger size={32} toggle={() => setIsMenuOpen(!isMenuOpen)} toggled={isMenuOpen} color='hsl(196, 77%, 55%)' rounded  />

            </HamburgerItem>

         </div>
      </section>

   );
}