import {Fragment} from 'react';
import CartImage from '../../assets/img/cart-bright-blue.svg';

export default function CartIcon() {

   return (
      <Fragment>
         <img src={CartImage} alt='Cart Icon'/>
      </Fragment>

   );
}