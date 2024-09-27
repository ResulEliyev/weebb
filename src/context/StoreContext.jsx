import { useLayoutEffect, createContext, useContext, useState } from "react";

const localCart=JSON.parse(localStorage.getItem('cart')) ?? [];

const StoreContext=createContext({
  cart: localCart,
  totalPrice:0,
  add:()=>{},
  remove:()=>{},
})


export const useStore=()=>useContext(StoreContext);

export default function  StoreProvider({children}){
  const [cart,setCart]=useState(localCart);
  const[totalPrice,setTotalPrice]=useState(0);

const addToCart=(item ,quantity = 1)=>{
  const existItem=cart.findIndex((i)=>i.id===item.id);
  if(existItem <0 )setCart((state)=>[...state,{...item,quantity}]);
  else{
    setCart((state)=>{
      state[existItem].quantity +=quantity;
      return [...state];
    });
  }
};
 const removeItem=(id)=>
  setCart((state)=>[...state.filter((item)=>item.id !==id)])

const calculateTotalPrice=()=>{
  let sum = 0
  cart.forEach(item=> sum +=(item.price *item.quantity ))
  setTotalPrice(sum)
};
useLayoutEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart));
  calculateTotalPrice()
},[cart]);
 return(
  <StoreContext.Provider 
  value={{
    cart,
    totalPrice,
    add:addToCart,
    remove:removeItem
  }}
  >
    {children}
    </StoreContext.Provider>
 );

}