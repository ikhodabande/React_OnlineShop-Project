import { createContext, useState } from "react"

export const shopContext = createContext(null);

export const shopContextProvider = (props) => {
  const [cartIdtems , setCartItems] = useState([])


  const addToCart = (itemId) => {
    setCartItems([...cartIdtems,{id : itemId , count :1}])

  }

  const removeFromCart = (itemId) => {
    setCartItems(cartIdtems.map((i)=>{
      if(i.id === itemId)
      return {...i, count : i.count-1}
      else return i
    }))

  }

  const contextValue = {cartIdtems, addToCart, removeFromCart } 

  return <shopContextProvider value={contextValue}>{props.children}</shopContextProvider>


}