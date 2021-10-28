import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'
import AmountButton from './AmountButton'

const CartItem = ({title , img , price , amount }) => {


  return(
    <div className="cart-item">
        <div className="product-img-container">
          <img className="product-img" src={img} alt={title}/>
        </div>
        <div className="cart-detail">
          <h4>{title}</h4>
          <p>{price} تومان</p>
          <button className="trash-btn"><FaRegTrashAlt/></button>
        </div>
        <AmountButton/>
    </div>
  )
}

export default CartItem;