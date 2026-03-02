import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Cart.module.css';
import useCart from '../../assets/hooks/useCart.jsx';
import {CART_ACTIONS} from './cartReducer.js';
import EmptyCart from '../../errors/EmptyCart/index.jsx';


export default function Cart() {
   const {cartState, cartDispatch} = useCart();

   const handleIncreaseQuantity = (id) => {
      cartDispatch({type: CART_ACTIONS.INCREASE_ITEM, payload: id});
   }

   const handleDecreaseQuantity = (id) => {
      cartDispatch({type: CART_ACTIONS.DECREASE_ITEM, payload: id});
   }

   const handleRemoveFromCart = (id) => {
      cartDispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: id});
   }

   const handleClearCart = () => {
      cartDispatch({type: CART_ACTIONS.CLEAR_CART});
   }

   if (cartState.cartItems.length === 0) {
      return <EmptyCart />;
   }

   return (
      <div className='utils-container'>
         <MetaData title='Cart'/>
         <div className={styles.cart__page}>
            <h2 className={styles.cart__page__title}>Cart</h2>
         </div>
      </div>

   );
}