import React, {Fragment, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../styles/Global.styled.jsx';
import Navbar from '../components/Navbar/index.jsx';
import NotFound from '../errors/NotFound/index.jsx';
import NoResults from '../errors/NoResults/index.jsx';
import EmptyCart from '../errors/EmptyCart/index.jsx';
import SignUp from '../auth/SignUp/index.jsx';
import SignIn from '../auth/SignIn/index.jsx';
import About from '../pages/About/index.jsx';
import Contact from '../pages/Contact/index.jsx';
import Home from '../pages/Home/index.jsx';
import Products from '../pages/Products/index.jsx';
import Cart from '../components/Cart/index.jsx';
import Preloader from '../components/Preloader/index.jsx';

export default function App() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setIsLoading(false);
      }, 3500);
      return () => clearTimeout(timerId);

   }, []);


   return (
      <div>
         {
            isLoading ? (<Preloader/>)
               : (<div className='app fade-in'>
                  <GlobalStyles/>
                  <Navbar/>
                  <Routes>
                     <Route path='/' element={<Home/>}/>
                     <Route path='/about' element={<About/>}/>
                     <Route path='/products' element={<Products/>}/>
                     <Route path='/contact' element={<Contact/>}/>
                     <Route path='/cart' element={<Cart/>}/>
                     <Route path='/sign-in' element={<SignIn/>}/>
                     <Route path='/sign-up' element={<SignUp/>}/>
                     <Route path='/empty-cart' element={<EmptyCart/>}/>
                     <Route path='/no-results' element={<NoResults/>}/>
                     <Route path='*' element={<NotFound/>}/>
                  </Routes>
                  <ToastContainer
                     position='bottom-right'
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick={false}
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                     theme='colored'
                     transition={Slide}
                     style={{zIndex: 10000}}

                  />
               </div>)
         }
      </div>

   );
}