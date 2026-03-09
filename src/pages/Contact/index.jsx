
import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Contact.module.css';
import TypewriterEffect from '../../components/TypewriterEffect/index.jsx';

export default function Contact() {

   return (
      <div className='utils-container'>
         <MetaData title="Contact"/>
         <div className={styles.contact__page}>
            <h2 className={styles.contact__page__title}>Contact</h2>
            <TypewriterEffect />
         </div>
      </div>

   );
}