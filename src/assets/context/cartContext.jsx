import React, {createContext, useReducer, useState} from 'react';
import data from '../data/chairs.json';
import {cartInitialState, cartReducer} from '../../components/Cart/cartReducer.js';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export default function CartProvider({children}) {
   const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
   const [products, setProducts] = useState(data.products);


   const isInCart = (product) => {
      return cartState.cartItems.some(cartItem => cartItem.id === product.id);
   };

   const getProduct = (id) => {
      return cartState.cartItems.find(cartItem => cartItem.id === parseInt(id));
   }

   return (
      <CartContext.Provider
         value={{cartState, cartDispatch, products, isInCart, getProduct, setProducts}}>
         {children}
      </CartContext.Provider>
   )
}