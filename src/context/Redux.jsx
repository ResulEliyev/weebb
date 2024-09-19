import { useReducer } from "react";

export const initialState = {
  total: 0,
  products: JSON.parse(localStorage.getItem("cart")) || [] ,
};



export default function StoreReducer(state, action) {

  // const existItem = cartList.findIndex((item) => {
  //   return item.id === product.id;
  // });
  
  // if (cartList.length === 0) {
  //   cartList.push(newProduct);
  // } else if (existItem < 0) {
  //   cartList.push(newProduct);
  // } else {
  //   cartList[existItem] = {
  //     ...cartList[existItem],
  //     quantity: cartList[existItem].quantity + quantity,
  //   };
  // }
  
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
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

// const saveLocalStorage = (state) => {
//   localStorage.setItem("cart", JSON.stringify(state.products));
//   localStorage.setItem("total", JSON.stringify(state.total));
// };

// const loadFromLocalStorage = () => {
//   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//   const savedTotal = JSON.parse(localStorage.getItem("total")) || 0;
//   return { products: savedCart, total: savedTotal };
// };

export const useStore = () => {
  const [state, dispatch] = useReducer(StoreReducer, initialState, loadFromLocalStorage);

  // useEffect(() => {
  //   saveLocalStorage(state);
  // }, [state]);

  return { state, dispatch };
};
