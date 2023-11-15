import React from 'react'
import { PRODUCTS } from '../../data/Products'
import Products from './Products'


function Shop() {
  return (
    <>
    <h1>Shop</h1>
    <div className="row">
      {PRODUCTS.map((productData)=> <Products key={productData.id} data={productData} />)}
    </div>
    </>
  )
}

export default Shop