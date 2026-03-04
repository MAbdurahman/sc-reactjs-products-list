export const CART_ACTIONS = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
   INCREASE_ITEM: 'INCREASE_ITEM',
   DECREASE_ITEM: 'DECREASE_ITEM',
   UPDATE_QUANTITY: 'UPDATE_QUANTITY',
   CLEAR_CART: 'CLEAR_CART'

}
 export const cartInitialState = {
   cartItems: [],
    totalItems: 0,
    totalPrice: 0
 }

export const cartReducer = (state = cartInitialState, action) => {
   const {type} = action;
   switch (type) {
      case CART_ACTIONS.ADD_TO_CART: {
         const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
         if (existingItem) {
            // Increase quantity if item already exists
            return {
               ...state,
               cartItems: state.cartItems.map(item =>
                  item.id === action.payload.id
                     ? {...item, quantity: item.quantity + 1}
                     : item
               ),
               totalItems: state.totalItems + 1,
               totalPrice: state.totalPrice + action.payload.price
            };
         }
         // Add new item with quantity 1
         return {
            ...state,
            cartItems: [...state.cartItems, {...action.payload, quantity: 1}],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + action.payload.price
         };
      }

      case CART_ACTIONS.INCREASE_ITEM: {
         const itemToIncrease = action.payload;

         const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

         if (existingItemIndex >= 0) {
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;

            return {
               ...state,
               cartItems: updatedCartItems,
               totalItems: state.totalItems + 1,
               totalPrice: state.totalPrice + (itemToIncrease.price * itemToIncrease.quantity)
            }
         }
         return state;
      }

      case CART_ACTIONS.DECREASE_ITEM: {
         const itemToDecrease = action.payload;
         const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

         if (existingItemIndex >= 0) {
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity -= 1;

            return {
               ...state,
               cartItems: updatedCartItems,
               totalItems: state.totalItems - 1,
               totalPrice: state.totalPrice - (itemToDecrease.price * itemToDecrease.quantity)
            }
         }
         return state;
      }

      case CART_ACTIONS.REMOVE_FROM_CART: {
         const itemToRemove = action.payload;

         return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== itemToRemove.id),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
         };
      }

      case CART_ACTIONS.UPDATE_QUANTITY: {
         const itemToUpdate = state.cartItems.find(item => item.id === action.payload);
         const quantityDiff = action.payload.quantity - itemToUpdate.quantity;

         return {
            ...state,
            cartItems: state.cartItems.map(item =>
               item.id === action.payload.id
                  ? { ...item, quantity: action.payload.quantity }
                  : item
            ),
            totalItems: state.totalItems + quantityDiff,
            totalPrice: state.totalPrice + (itemToUpdate.price * quantityDiff)
         };
      }

      case CART_ACTIONS.CLEAR_CART:
         return cartInitialState

      default:
         return state;

   }

}