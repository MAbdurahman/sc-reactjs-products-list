import React, {useState} from 'react'

import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Products.module.css';
import StarRating from '../../components/StarRating/index.jsx';
/*import {StarRating} from '../../styles/RatingStar.styled.jsx';*/
import data from '../../assets/data/products.json';
import ProductCard from '../../components/ProductCard/index.jsx';


export default function Products() {
   const [products, setProducts] = useState(data.products);


   console.log(products);

   return (
      <div className='utils-container'>
         <MetaData title='Products'/>
         <div className={styles.products__page}>
            <h2 className={styles.products__page__title}>Products</h2>
            <div className={styles.products__grid}>
               {
                  products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))
               }
            </div>
         </div>
      </div>

   );
}