import React from 'react';
import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from 'react-icons/io'



const AmountButton = () => {
  return(
    <div className="amount-buttons">
    <button><IoIosArrowDropupCircle/></button>
      <p>1</p>
    <button><IoIosArrowDropdownCircle/></button>
    </div>
  )
}

export default AmountButton;