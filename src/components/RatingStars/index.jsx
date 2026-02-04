import React from 'react';
import styles from './RatingStars.module.css';

export default function RatingStars({rating}) {
   const stars = [];
   for (let i =1 ; i <= 5 ; i++) {
      stars.push(
         <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>
      )
   }

   return (
      <div className={styles.product__rating}>{stars}</div>

   );
}