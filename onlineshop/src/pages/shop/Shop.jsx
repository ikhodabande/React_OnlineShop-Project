import React from 'react'
import { PRODUCTS } from '../../data/Products'


function Shop() {
  return (
    <>
    <h1>Shop</h1>
    <div className="row">
      {PRODUCTS.map((productData)=>{

      })}
    </div>
    </>
  )
}

export default Shop