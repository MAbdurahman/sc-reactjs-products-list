import {useParams} from 'react-router-dom';
import {Minus, Plus, Trash2} from 'react-feather';
import styles from './ProductDetails.module.css';
import useProducts from '../../assets/hooks/useProducts.jsx';
import useCart from '../../assets/hooks/useCart.jsx';
import StarRating from '../StarRating/index.jsx';
import React, {useEffect} from 'react';
import {CART_ACTIONS} from '../Cart/cartReducer.js';
import {PRODUCT_ACTIONS} from '../../pages/Products/productsReducer.js';
import {
   addCommasToNumber,
   formatWithDecimals
} from '../../assets/utils/functionsUtils.js';


export default function ProductDetails() {
   const {id} = useParams();
   const {productsState, productsDispatch} = useProducts();
   const {cartState, cartDispatch, isInCart} = useCart();
   const {cartItems} = cartState;
   console.log(productsState)

   console.log('params id - ', id );
   console.log('cartItems', cartItems)

   console.log('cartState', cartState);



   useEffect(() => {
      productsDispatch({
         type: PRODUCT_ACTIONS.GET_SINGLE_PRODUCT,
         payload: id
      });
   }, [productsDispatch, id]);

   const {singleProduct} = productsState;
   console.log(singleProduct);

   /*const handleIncreaseQuantity = (singleProduct) => {
      cartDispatch({type: CART_ACTIONS.INCREASE_ITEM, payload: singleProduct});
   }

   const handleDecreaseQuantity = (singleProduct) => {
      cartDispatch({type: CART_ACTIONS.DECREASE_ITEM, payload: singleProduct});
   }*/




   /*let productPrice = singleProduct.price;
   productPrice = formatWithDecimals(productPrice);
   productPrice = addCommasToNumber(productPrice);*/

   console.log('isInCart', isInCart(singleProduct));

   return (
      singleProduct && (

      <h2 className={styles.product_details_page}>{singleProduct.name}</h2>
      )
      /*<section className={styles.product_details_container}>
         <div className={styles.product_details_page}>
            <div className={styles.product_details_left}>
               <figure className={styles.product_details_image}>
                  <img src={singleProduct.image} alt={singleProduct.name}/>
               </figure>
            </div>
            <div className={styles.product_details_right}>
               <div className={styles.product_details_right_top}>
                  <h4
                     className={styles.product_details_name}>{singleProduct.name}</h4>
                  <div className={styles.product_details_rating}>
                     <StarRating/>
                     <span>({singleProduct.reviews} reviews)</span>
                  </div>
                  <p className={styles.product_details_description}>{singleProduct.description}</p>
                  <h5
                     className={styles.products_details_price}><span>$</span>{singleProduct.price}</h5>
               </div>
               <div className={styles.product_details_right_bottom}>
                  {
                     isInCart && (
                        <div className={styles.product_details_right_bottom_right}>
                           <Minus className={styles.product_details_icon} />
                           <span className={styles.product_details_quantity}>{singleProduct.quantity}</span>
                           <Plus className={styles.product_details_icon} />
                        </div>
                     )
                  }
                  <button className={styles.product_details_button}>Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </section>*/

   );
}