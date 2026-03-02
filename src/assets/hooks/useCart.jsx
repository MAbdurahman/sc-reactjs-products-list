import React, {useContext} from 'react';
import {CartContext} from '../context/cartContext.jsx'

export default function useCart() {
   return useContext(CartContext);
}