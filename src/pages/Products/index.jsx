import React from 'react';
import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Products.module.css';
import ProductCard from '../../components/ProductCard/index.jsx';
import useProducts from '../../assets/hooks/useProducts.jsx';

export default function Products() {
   const {productsState} = useProducts();
   const {products} = productsState;

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