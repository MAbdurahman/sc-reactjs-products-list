import {useParams} from 'react-router-dom';
import {Minus, Plus, Trash2} from 'react-feather';
import styles from './ProductDetails.module.css';
import useProducts from '../../assets/hooks/useProducts.jsx';
import useCart from '../../assets/hooks/useCart.jsx';
import StarRating from '../StarRating/index.jsx';
import React, {useEffect} from 'react';
import {CART_ACTIONS} from '../Cart/cartReducer.js';
import {PRODUCT_ACTIONS} from '../../pages/Products/productsReducer.js';

export default function ProductDetails() {
   const {id} = useParams();
   const {productsState, productsDispatch} = useProducts();
   const {cartDispatch, isInCart, getProductInCart} = useCart();

   useEffect(() => {
      productsDispatch({
         type: PRODUCT_ACTIONS.GET_SINGLE_PRODUCT,
         payload: id
      });
   }, [productsDispatch, id]);

   const {singleProduct} = productsState;

   const handleIncreaseQuantity = (singleProduct) => {
      cartDispatch({type: CART_ACTIONS.INCREASE_ITEM, payload: singleProduct});
   }

   const handleDecreaseQuantity = (singleProduct) => {
      cartDispatch({type: CART_ACTIONS.DECREASE_ITEM, payload: singleProduct});
   }

   const handleAddToCart = () => {
      cartDispatch({type: CART_ACTIONS.ADD_TO_CART, payload: singleProduct});
   }

   return (
      singleProduct && (
         <section className={styles.product_details_container}>
            <div className={styles.product_details_row}>
               <div className={styles.product_details_col_6}>
                  <figure className={styles.product_details_image}>
                     <img src={singleProduct.image} alt={singleProduct.name}/>
                  </figure>
               </div>
               <div className={styles.product_details_col_6}>
                  <div className={styles.product_details_right}>
                     <div className={styles.product_details_right_top}>
                        <h3
                           className={styles.product_details_name}>{singleProduct.name}</h3>
                        <div className={styles.product_details_rating}>
                           <StarRating/>
                           <span
                              className={styles.product_details_rating}>({singleProduct.reviews} reviews)</span>
                        </div>
                        <p className={styles.product_details_description}>{singleProduct.description}</p>
                        <h4
                           className={styles.product_details_price}>${singleProduct.price.toLocaleString()}</h4>
                     </div>
                     <div className={styles.product_details_right_bottom}>
                        <div className={styles.product_details_buttons}>
                           {
                              isInCart(singleProduct) && getProductInCart(id) && (
                                 <div
                                    className={styles.product_details__right_bottom_left}>
                                    <Minus className={styles.product_details_icon}
                                           onClick={() => handleDecreaseQuantity(singleProduct)}/>
                                    <span
                                       className={styles.product_details_quantity}>{getProductInCart(id).quantity}</span>
                                    <Plus className={styles.product_details_icon}
                                          onClick={() => handleIncreaseQuantity(singleProduct)}/>
                                 </div>
                              )
                           }
                           <button type='button'
                                   className={styles.product_details_button}
                                   onClick={handleAddToCart}>Add to Cart
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )
   );
}