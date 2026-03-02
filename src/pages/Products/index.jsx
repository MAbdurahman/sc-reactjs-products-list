import React from 'react';
import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Products.module.css';
import useCart from '../../assets/hooks/useCart.jsx';
import ProductCard from '../../components/ProductCard/index.jsx';

export default function Products() {
   const {products} = useCart();

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