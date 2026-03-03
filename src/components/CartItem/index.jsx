import React, {Fragment} from 'react';
import useCart from '../../assets/hooks/useCart.jsx';
import styles from './CartItem.module.css';
import {DeleteOutlined} from '@ant-design/icons';
import {PlusOutlined} from '@ant-design/icons';
import {MinusOutlined} from '@ant-design/icons';
import {CART_ACTIONS} from '../Cart/cartReducer.js';


export default function CartItem({cartItem}) {

   const {cartState, cartDispatch} = useCart();
   const {cartItems} = cartState;


   const handleIncreaseQuantity = (id) => {
      cartDispatch({type: CART_ACTIONS.INCREASE_ITEM, payload: id});
   }

   const handleDecreaseQuantity = (id) => {
      cartDispatch({type: CART_ACTIONS.DECREASE_ITEM, payload: id});
   }

   const handleRemoveFromCart = (id) => {
      cartDispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: id});
   }

   return (
      <section className={styles.cart_item}>
         <div className={styles.cart_item_page}>
            <img src={cartItem.image} alt={cartItem.name} className={styles.cart_item_image} />
            <div className={styles.cart_item_content}>
               <div className={styles.cart_item_top}>
                  <h5 className={styles.cart_item_name}>{cartItem.name}</h5>
                  <DeleteOutlined className={styles.cart_item_icon}  onClick={handleRemoveFromCart} />
               </div>
               <div className={styles.cart_item_middle}>
                  <div className={styles.cart_item_middle_top}>
                     {/*<span className={styles.cart_item_desc_label}>description:</span>*/}
                     <span className={styles.cart_item_description}>{cartItem.description}</span>
                  </div>
                  <div className={styles.cart_item_middle_bottom}>
                     <span className={styles.cart_item_desc_label}>brand:</span>
                     <span className={styles.cart_item_description}>{cartItem.brand}</span>
                  </div>
                  <div className={styles.cart_item_bottom}>
                     <h6 className={styles.cart_item_price}>${cartItem.price}</h6>
                     <div className={styles.cart_item_bottom_right}>
                        <MinusOutlined style={{fontSize:'24px', color: 'black'}} onClick={handleDecreaseQuantity} />
                        <span className={styles.cart_item_quantity}>{cartItem.quantity}</span>
                        <PlusOutlined style={{fontSize:'24px', color: 'black'}} onClick={handleIncreaseQuantity} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}