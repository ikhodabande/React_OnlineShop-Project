import { createContext } from "react";
import UseCart from "../hook/useCart";


export const ShopContext = createContext({
  cartItems : null,
  addToCart : ()=>{},
  removeFromCart : ()=>{},
});

export const ShopContextProvider =(props)=>{
  return <ShopContext.Provider value={UseCart()}>{props.children}</ShopContext.Provider>
}