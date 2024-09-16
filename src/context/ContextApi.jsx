
import { createContext, useContext, useState } from "react";

 const SearchContext = createContext(null);
export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {

 const[cartCount,setCartCount]=useState(0)


//  const existItem = cartList.findIndex((item) => {
//   return item.id === product.id;
// });

const addToCart=()=>{
  
  setCartCount((prev)=>prev + 1)
}


const data={
  cartCount,
  addToCart
}


  return (
    <SearchContext.Provider
      value={data}
    >
      {children}
    </SearchContext.Provider>
  );
}
