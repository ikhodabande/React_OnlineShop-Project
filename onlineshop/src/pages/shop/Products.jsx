import React from 'react'

const Products = ({data}) => {
  const {id ,productImage , productName , price} = data
  return (
    <div className="col-3">
      <img src={productImage} className='w-100' alt="" />
      {productName}
    </div>
  )
}

export default Products