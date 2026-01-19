import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './SignUp.module.css';
import {Link} from 'react-router-dom';
export default function SignUp() {

   return (
      <div className='utils-container'>
         <MetaData title="Sign Up"/>
         <div className={styles.sign__up__page}>
            <h2 className={styles.sign__up__page__title}>Sign Up</h2>
            <h5 className={styles.sign__up__paragraph}>Already have an account? <span className={styles.sign__up__paragraph__link}><Link to='/sign-in'>Sign In</Link></span></h5>
         </div>
      </div>

   );
}