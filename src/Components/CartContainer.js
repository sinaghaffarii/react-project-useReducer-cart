import React from 'react'
import CartItem from './CartItem'
import cart from './data'

const CartContainer = () => {


  return(
    <section className="cart">
      {/* ---- Header ----- */}
      <header>
        <h3>سبد خرید</h3>
      </header>
      {/* ----- Cart Item ------ */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
    {/*  ----- Footer ----- */}
      <div className="line"></div>
      <footer>
        <div className="footer-total">
          <p>جمع کل</p>
          <p> ۲۰۰۰۰۰ تومان</p>
        </div>
        <button className="btn-footer">حذف همه</button>
      </footer>
    </section>
  )
}

export default CartContainer;