import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './SignIn.module.css';
import {Link} from 'react-router-dom';
export default function SignIn() {

   return (
      <div className='utils-container'>
         <MetaData title="Sign In"/>
         <div className={styles.sign__in__page}>
            <h2 className={styles.sign__in__page__title}>Sign In</h2>
            <h5 className={styles.sign__in__paragraph}>Do not have an account? <span
               className={styles.sign__in__paragraph__link}><Link
               to='/sign-up'>Sign Up</Link></span></h5>
         </div>

      </div>

   );
}