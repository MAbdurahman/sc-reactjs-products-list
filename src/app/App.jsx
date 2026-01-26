import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
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




export default function App() {

   return (
      <Fragment>
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
      </Fragment>
   );
}