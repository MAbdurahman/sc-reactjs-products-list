import {Outlet} from 'react-router-dom';
import GlobalStyles from '../styles/Global.styled.jsx';
import Navbar from '../components/Navbar/index.jsx';

export default function App() {

   return (
      <div>
         <Navbar/>
         <Outlet/>
         <GlobalStyles/>
      </div>

   );
}