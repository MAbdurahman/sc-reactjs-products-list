import React, {Fragment} from 'react';
import useCart from '../../assets/hooks/useCart.jsx';
import styles from './CartItem.module.css';
import {Minus, Plus, Trash2} from 'react-feather';
import {CART_ACTIONS} from '../Cart/cartReducer.js';


export default function CartItem({cartItem}) {

   const {cartDispatch} = useCart();

   const handleIncreaseQuantity = (cartItem) => {
      cartDispatch({type: CART_ACTIONS.INCREASE_ITEM, payload: cartItem});
   }

   const handleDecreaseQuantity = (cartItem) => {
      cartDispatch({type: CART_ACTIONS.DECREASE_ITEM, payload: cartItem});
   }

   const handleRemoveFromCart = (cartItem) => {
      cartDispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: cartItem});
   }

   return (
      <section className={styles.cart_item}>
         <div className={styles.cart_item_page}>
            <img src={cartItem.image} alt={cartItem.name} className={styles.cart_item_image} />
            <div className={styles.cart_item_content}>
               <div className={styles.cart_item_top}>
                  <h5 className={styles.cart_item_name}>{cartItem.name}</h5>
                  <Trash2 className={styles.cart_item_trash_icon}  onClick={()=>handleRemoveFromCart(cartItem)} />
               </div>
               <div className={styles.cart_item_middle}>
                  <div className={styles.cart_item_middle_top}>
                     <span className={styles.cart_item_description}>{cartItem.description}</span>
                  </div>
                  <div className={styles.cart_item_middle_bottom}>
                     <span className={styles.cart_item_desc_label}>brand:</span>
                     <span className={styles.cart_item_description}>{cartItem.brand}</span>
                  </div>
                  <div className={styles.cart_item_bottom}>
                     <h6 className={styles.cart_item_price}>${cartItem.price.toLocaleString()}</h6>
                     <div className={styles.cart_item_bottom_right}>
                        <Minus className={styles.cart_item_icon} onClick={()=>handleDecreaseQuantity(cartItem)} />
                        <span className={styles.cart_item_quantity}>{cartItem.quantity}</span>
                        <Plus className={styles.cart_item_icon} onClick={()=> handleIncreaseQuantity(cartItem)} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}