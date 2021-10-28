import React from 'react'
import { BsCart2 } from 'react-icons/bs'



const Navbar = () => {
  return(
    <div className="navbar">
      <div className="navbar-items">
          <h4 className="logo">کتابیکو</h4>
        <div className="navbar-container">
          <div className="navbar-cart">
            <BsCart2/>

          </div>
          <div className="amount-container">
            <p className="total-amount">8</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;