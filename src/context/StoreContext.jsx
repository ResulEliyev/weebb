import { createContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./Redux";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.products));
    localStorage.setItem("total", JSON.stringify(state.total));
  }, [state]);

  const addToCart = (product) => {
    const updatedCart = [...state.products, product];
    updatePrice(updatedCart);

    dispatch({
      type: "add",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      currentProduct => currentProduct.name !== product.name
    );

    updatePrice(updatedCart);

    dispatch({
      type: "remove",
      payload: product,
    });
  };

  const updatePrice = (products) => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    
    dispatch({
      type: "update",
      payload: total,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "clear",
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    clearCart,
    updatedCart: state.products,
    product: state.products, 
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
