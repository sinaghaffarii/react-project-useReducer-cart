import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import {useGlobalContext} from "./Context";


const Navbar = () => {
  const {amount} = useGlobalContext()
  return(
    <div className="navbar">
      <div className="navbar-items">
          <h4 className="logo">کتابیکو</h4>
        <div className="navbar-container">
          <div className="navbar-cart">
            <BsCart2/>

          </div>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;