import data from '../../assets/data/chairs.json';

export const PRODUCT_ACTIONS = {
   GET_PRODUCTS: 'GET_PRODUCTS',
   GET_SINGLE_PRODUCT: 'GET_SINGLE_PRODUCT'
}

export const productsInitialState = {
   products: [...data.products],
   singleProduct: null

}

export const productsReducer = (state = productsInitialState, action) => {
   const {type, payload} = action;
   switch (type) {
      case PRODUCT_ACTIONS.GET_PRODUCTS:
         return {...state, products: payload};

      case PRODUCT_ACTIONS.GET_SINGLE_PRODUCT: {
         return {
            ...state,
            singleProduct: state.products.find(product => product.id === parseInt(payload))
         };
      }

      default:
         return state;
   }
};