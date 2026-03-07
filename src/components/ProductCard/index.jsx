import React, {useContext} from 'react';
import styles from './ProductCard.module.css';
import StarRating from '../StarRating/index.jsx';
import {CartContext} from '../../assets/context/cartContext.jsx';
import {CART_ACTIONS} from '../Cart/cartReducer.js';
import { Link } from "react-router-dom";


export default function ProductCard({product}) {
   const {cartDispatch} = useContext(CartContext)

   const handleAddToCart = () => {
      cartDispatch({type: CART_ACTIONS.ADD_TO_CART, payload: product});
   }

   return (
      <div className={styles.card}>
         <Link to={`/products/${product.id}`}>
            <img src={product.image} className={styles.card_image} alt={product.name}
                 width='280' height='auto'/>
         </Link>
         <div className={styles.card_bottom}>
         <div className={styles.card_body}>
            <h5 className={styles.card_title}>{product.name}</h5>
            <p className={styles.card_description}>{product.description}</p>
            <h6 className={styles.card_price}>${product.price}</h6>
            <StarRating/>
         </div>
         <div className={styles.card_footer}>
            <button type='button'
                    className={styles.card_button}
                    onClick={handleAddToCart}>Add To Cart</button>
         </div>
         </div>
      </div>
   );
}