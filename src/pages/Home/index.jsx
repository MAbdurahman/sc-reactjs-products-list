import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './Home.module.css';
import TypewriterEffect from '../../components/TypewriterEffect/index.jsx';

export default function Home() {

   return (
      <div className='utils-container'>
         <MetaData title="Home"/>
         <div className={styles.home__page}>
            <h2 className={styles.home__page__title}>Home</h2>
            <TypewriterEffect />
         </div>
      </div>

   );
}