import React, {useState} from 'react';
import Logo from '../Logo/index.jsx';
import {Link} from 'react-router-dom';
import {NavbarWrapper} from '../../styles/Navbar.styled.jsx';


export default function Navbar() {

   return (
      <section className='utils-container-fluid navbar-section'>
         <div className='utils-container'>
            <NavbarWrapper>
               <Logo/>
            </NavbarWrapper>


         </div>
      </section>

   );
}