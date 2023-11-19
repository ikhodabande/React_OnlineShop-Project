import React, { useContext } from 'react';
import {PRODUCTS} from '../../data/Products';
import {ShopContext} from '../../context/shopContext';
import Products from '../shop/Products';

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <h1>Your cart items</h1>
    <div className="row">
      {PRODUCTS.map((p)=>{
        if(cartItems.some((i)=> i.id === p.id  &&  i.count >0))
        return <Products data={p} ></Products>
      })}
    </div>
    </>
  )
}

export default Cart