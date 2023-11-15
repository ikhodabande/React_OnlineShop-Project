import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">Mehraban SHOP</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className='nav-link' >shop</Link>
            </li>
          <li className="nav-item">
          <Link to="/cart" className='nav-link' >cart</Link>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar