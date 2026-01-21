import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';


export default function NotFound() {

   return (
      <div className='utils-container'>
         <MetaData title="Not Found"/>
         <div className={styles.not__found__page}>
            <div className={styles.not__found__container}>
               <h2 className={styles.not__found__heading}>404</h2>
               <p className={styles.not__found__paragraph}>Page Not Found</p>
               <Link to='/home' className={styles.not__found__button}>
                  Go To Home
               </Link>
            </div>
         </div>
      </div>

   );
}