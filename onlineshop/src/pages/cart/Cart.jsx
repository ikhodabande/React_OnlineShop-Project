import React, { useContext } from 'react';
import {PRODUCTS} from '../../data/Products';
import {ShopContext} from '../../context/shopContext';
import Products from '../shop/Products';

const Cart = () => {
  const {cartItems, resetCart} = useContext(ShopContext);
  return (
    <>
    <h1 className='mt-1'>Your cart items</h1>
    <div className="row">
      {PRODUCTS.map((p)=>{
        if(cartItems?.find((i)=> i.id === p.id  &&  i.count >0))
        return <Products data={p} ></Products>
      })}
    </div>
    <button className='btn btn-warning m-3' onClick={resetCart}>Reset</button>
    </>
  )
}

export default Cart