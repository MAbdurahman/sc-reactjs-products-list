import {Fragment} from 'react';
import Image from '../../assets/img/cart-bright-blue.svg';
import {StyledCartImage} from '../../styles/Navbar.styled.jsx';

export default function CartImage() {

   return (
      <StyledCartImage src={Image} alt="CartImage" />

   );
}