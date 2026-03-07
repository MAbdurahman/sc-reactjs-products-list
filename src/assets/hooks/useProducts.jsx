import {useContext} from 'react';
import {ProductsContext} from '../context/productsContext.jsx';

export default function useProducts() {
   return useContext(ProductsContext);
}