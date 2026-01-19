import React, {Fragment} from 'react';
import {LogoImage} from '../../styles/Navbar.styled.jsx';
import eMartLogo from '../../assets/img/eMart-Logo.svg';

export default function Logo() {
   return (
      <LogoImage src={eMartLogo} alt='Index'/>
   );
}