import React from 'react';
import styles from './ProductCard.module.css';
import RatingStars from '../RatingStars/index.jsx';
import StarRating from '../StarRating/index.jsx';
import {Col} from 'react-bootstrap';

export default function ProductCard({product}) {

   return (

      <div className={styles.card}>
         <img src={product.image} className={styles.card_image} alt={product.title} width='240' height='160'/>
         <div className={styles.card_body}>
            <p className={styles.card_title}>{product.title}</p>
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