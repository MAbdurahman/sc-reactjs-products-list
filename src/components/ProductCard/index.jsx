import React from 'react';
import styles from './ProductCard.module.css';
import RatingStars from '../RatingStars/index.jsx';
import StarRating from '../StarRating/index.jsx';
import {Col} from 'react-bootstrap';

export default function ProductCard({product}) {

   return (

      <div className={styles.card}>
         <img src={product.image} className={styles.card_image} alt={product.name} width='280' height='auto'/>
         <div className={styles.card_body}>
            <h5 className={styles.card_title}>{product.name}</h5>
            <p className={styles.card_description}>{product.description}</p>
            <h6 className={styles.card_subtitle}>${product.price}</h6>
            <StarRating/>
         </div>
         <div className={styles.card_footer}>
            <button type='button' className={styles.card_button}>Add To Cart</button>
         </div>
      </div>

   );
}