import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './About.module.css';

export default function About() {

   return (
      <div className='utils-container'>
         <MetaData title='About'/>
         <div className={styles.about__page}>
            <h2 className={styles.about__page__title}>About</h2>
         </div>
      </div>

   );
}