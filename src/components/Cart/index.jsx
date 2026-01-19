import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Cart.module.css';


export default function Cart() {

   return (
      <div className='utils-container'>
         <MetaData title='Cart'/>
         <div className={styles.cart__page}>
            <h2 className={styles.cart__page__title}>Cart</h2>
         </div>
      </div>

   );
}