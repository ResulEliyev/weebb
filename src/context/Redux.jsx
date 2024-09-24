import { useReducer } from "react";

export const initialState = {
  total: 0,
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

export default function StoreReducer(state, action) {
  switch (action.type) {
    case "add":
      const existItem = state.products.findIndex(
        (item) => item.id === action.payload.id 
      )
      console.log(existItem,action.payload);
      
      if (existItem >= 0) {
        const updatedProducts = [...state.products];
        updatedProducts[existItem] = {
          ...updatedProducts[existItem],
          quantity:
            updatedProducts[existItem].quantity + action.payload.quantity,
        };
        // console.log(updatedProducts);
        
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
          // ...state,
          // products: action.payload,
        };
      }
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "update":
      return {
        ...state,
        total: action.payload,
      };
    case "clear":
      return {
        total: 0,
        products: [],
      };
    default:
      throw new Error("kele nagaysan??");
  }
}



export const useStore = () => {
  const [state, dispatch] = useReducer(
    StoreReducer,
    initialState,
    loadFromLocalStorage
  );


  return { state, dispatch };
};
