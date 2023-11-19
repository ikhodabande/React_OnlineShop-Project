import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shopContext';


const Products = ({data}) => {
  const {id ,productImage , productName , price} = data;
  
  const {cartItems, addToCart, removeFromCart } = useContext(ShopContext);
 

  return (
    <div className="col-3">
      <img src={productImage} className='w-100' alt="" />
      <h5>{productName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm ">+</button>
      <span className='mx-1'>{cartItems?.filter((row)=> row.id === id)[0]?.count}</span>
      <button className="btn btn-info btn-sm ">-</button>
    </div>
  )
}

export default Products