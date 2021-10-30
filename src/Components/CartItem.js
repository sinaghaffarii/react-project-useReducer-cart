import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'
// import AmountButton from './AmountButton'
import {useGlobalContext} from "./Context";
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io";

const CartItem = ({id, title , img , price , amount }) => {

  const {remove, increase, decrease, toggleAmount} = useGlobalContext();

  return(
    <div className="cart-item">
        <div className="product-img-container">
          <img className="product-img" src={img} alt={title}/>
        </div>
        <div className="cart-detail">
          <h4>{title}</h4>
          <p>{price} تومان</p>
          <button onClick={() => remove(id)} className="trash-btn"><FaRegTrashAlt/></button>
        </div>
      <div className="amount-buttons">
        {/*<button onClick={() => increase(id)}><IoIosArrowDropupCircle/></button>*/}
        <button onClick={() => toggleAmount(id, 'inc')}><IoIosArrowDropupCircle/></button>

        <p>{amount}</p>
        {/*<button onClick={() => decrease(id)}><IoIosArrowDropdownCircle/></button>*/}
        <button onClick={() => toggleAmount(id, 'dec')}><IoIosArrowDropdownCircle/></button>

      </div>
    </div>
  )
}

export default CartItem;