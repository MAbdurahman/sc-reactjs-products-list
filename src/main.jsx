import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './assets/context/cartContext.jsx';
import ProductsProvider from './assets/context/productsContext.jsx';
import './index.css';
import App from './app/App.jsx';


createRoot(document.getElementById('root')).render(
   <ProductsProvider>
      <CartProvider>
         <BrowserRouter>
            <App/>
         </BrowserRouter>
      </CartProvider>
   </ProductsProvider>
);