
import React, {createContext, useReducer} from 'react';
import {productsInitialState, productsReducer} from '../../pages/Products/productsReducer.js';

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
   const [productsState, productsDispatch] = useReducer(productsReducer, productsInitialState);

   return (
      <ProductsContext.Provider value={{productsState, productsDispatch}}>
         {children}
      </ProductsContext.Provider>
   )
}