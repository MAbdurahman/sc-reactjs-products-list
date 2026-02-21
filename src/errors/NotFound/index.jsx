import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';
import NotFoundGif from '../../assets/img/not-found.gif';
import NoResultsImage from '../../assets/img/no-results.svg';

export default function NotFound() {

   return (
      <div className='utils-container'>
         <MetaData title="Not Found"/>
         <div className={styles.not__found__page}>
            <div className={styles.not__found__container}>
               {/*<h2 className={styles.not__found__heading}>404</h2>*/}
               <img className={styles.not__found__gif} src={NotFoundGif} alt='No Results Face'/>
               <p className={styles.not__found__paragraph}>Page Not Found</p>
               <Link to='/' className={styles.not__found__button}>
                  Go To Home
               </Link>
            </div>
         </div>
      </div>

   );
}