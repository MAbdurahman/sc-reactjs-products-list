import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Contact.module.css';

export default function Contact() {

   return (
      <div className='utils-container'>
         <MetaData title="Contact"/>
         <div className={styles.contact__page}>
            <h2 className={styles.contact__page__title}>Contact</h2>
         </div>
      </div>

   );
}