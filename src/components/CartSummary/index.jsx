import React from 'react';
import styles from './CartSummary.module.css';
import useCart from '../../assets/hooks/useCart.jsx';

export default function CartSummary() {
   const {cartState} = useCart();
   const {cartItems} = cartState;

   const totalItems = cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

   const subtotal = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
      0
   );

   const discount = (subtotal * 0.2).toFixed(2);
   const deliveryFee = 75;
   const total = (subtotal - discount + deliveryFee).toFixed(2);

   return (
      <section className={styles.cart_summary}>
         <h3 className={styles.cart_summary_title}>Order Summary</h3>

         <div className={styles.cart_summary_content}>
            <div className={styles.cart_summary_information}>
               <p className={styles.cart_summary_label}>Subtotal:</p>
               <p className={styles.cart_summary_text}>${subtotal}</p>
            </div>

            <div className={styles.cart_summary_information}>
               <p className={styles.cart_summary_label}>Total Items:</p>
               <p className={styles.cart_summary_text}>{totalItems}</p>
            </div>

            <div className={styles.cart_summary_information}>
               <p className={styles.cart_summary_label}>Discount (-20%):</p>
               <p className={styles.cart_summary_text}>${discount}</p>
            </div>

            <div className={styles.cart_summary_information}>
               <p className={styles.cart_summary_label}>Delivery Fee:</p>
               <p className={styles.cart_summary_text}>${deliveryFee}</p>
            </div>
         </div>

         <div className={styles.cart_summary_total}>
            <p className={styles.cart_summary_total_text}>Total:</p>
            <p className={styles.cart_summary_total_text}>${total}</p>
         </div>

         <button className={styles.cart_summary_button}>
            Go to Checkout
         </button>
      </section>
   );
}