import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Products.module.css';
import StarRating from '../../components/StarRating/index.jsx';
/*import {StarRating} from '../../styles/RatingStar.styled.jsx';*/


export default function Products() {

   return (
      <div className='utils-container'>
         <MetaData title='Products'/>
         <div className={styles.products__page}>
            <h2 className={styles.products__page__title}>Products</h2>
         </div>
      </div>

   );
}