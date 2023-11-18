import { createContext, useState } from "react"

export const shopContext = createContext(null);

export const shopContextProvider = (props) => {
  const [cartIdtems , setCartItems] = useState([])


  const addToCart = () => {

  }

  const removeFromCart = () => {

  }

  const contextValue = {cartIdtems, addToCart, removeFromCart } 

  return <shopContextProvider value={contextValue}>{props.children}</shopContextProvider>


}