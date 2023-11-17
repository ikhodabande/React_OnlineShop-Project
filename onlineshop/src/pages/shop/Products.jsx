import React, { useState } from 'react'

const Products = ({data}) => {
  const [cartIdtems , setCartItems] = useState({})
  const {id ,productImage , productName , price} = data
  return (
    <div className="col-3">
      <img src={productImage} className='w-100' alt="" />
      <h5>{productName}</h5>
      <p>price : {price}$</p>
      <button className="btn btn-info btn-sm ">+</button>
      <span className='mx-1+6'>0</span>
      <button className="btn btn-info btn-sm ">-</button>
    </div>
  )
}

export default Products