import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Cart.module.css';
import useCart from '../../assets/hooks/useCart.jsx';
import {CART_ACTIONS} from './cartReducer.js';
import EmptyCart from '../../errors/EmptyCart/index.jsx';
import CartItem from '../CartItem/index.jsx';
import CartSummary from '../CartSummary/index.jsx';


export default function Cart() {
   const {cartState, cartDispatch} = useCart();
   const {cartItems} = cartState;

   /*const handleIncreaseQuantity = (id) => {
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
   }*/

   if (cartState.cartItems.length === 0) {
      return <EmptyCart />;
   }

   return (
      <div className='utils-container'>
         <MetaData title='Cart'/>
         <div className={styles.cart__page}>
            <h2 className={styles.cart__page__title}>Your Cart</h2>
         <div className={styles.cart_content}>
            <div className={styles.cart_content_items}>
               {cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
               ))}
            </div>

            <div className={styles.cart_content_summary}>
               <CartSummary />
            </div>
         </div>
         </div>
      </div>

   );
}