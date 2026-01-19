import React, {useState} from 'react';
import Logo from '../Logo/index.jsx';
import {Link} from 'react-router-dom';
import {
   CenterItems,
   NavbarWrapper,
   StyledNavLinkCenter,
   StyledNavLinkRight,
   LeftItems,
   RightItems
} from '../../styles/Navbar.styled.jsx'
import {centerLinks, rightLinks} from '../../assets/links/links.js';


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



         </div>
      </section>

   );
}