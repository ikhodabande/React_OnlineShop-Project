import React, { useContext, useState } from 'react'
import { shopContext } from '../../context/shopContext'

const Products = ({props}) => {
  const {id ,productImage , productName , price} = props.data
 
  const {cartItems, addToCart, removeFromCart} = useContext(shopContext)
 
  return (
    <div className="col-3">
      <img src={productImage} className='w-100' alt="" />
      <h5>{productName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm ">+</button>
      <span className='mx-1'>{cartItems?.filter((row)=>row.id === id)[0]?.count}</span>
      <button className="btn btn-info btn-sm ">-</button>
    </div>
  )
}

export default Products