import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './EmptyCart.module.css';
import {Link} from 'react-router-dom';
import EmptyCartImage from '../../../src/assets/img/empty-cart.svg';

export default function EmptyCart() {

   return (
      <div className='utils-container'>
         <MetaData title="Empty Cart"/>
         <div className={styles.empty__cart__page}>
            <div className={styles.empty__cart__container}>
               <img className={styles.empty__cart__image} src={EmptyCartImage} alt='Empty Cart Face'/>
               <p className={styles.empty__cart__paragraph}>Empty Cart</p>
               <Link to='/products' className={styles.empty__cart__button}>
                  Continue Shopping
               </Link>
            </div>
         </div>
      </div>

   );
}