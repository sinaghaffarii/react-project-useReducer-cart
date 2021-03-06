import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from "./Context";

const CartContainer = () => {

  const { cart, total, clearCart } = useGlobalContext()
  if(cart.length === 0) {
    return(
      <section className="empty-cart">
      {/*  cart header */}
          <h2>سبد خرید</h2>
          <h4>هیچ محصولی در سبد خرید موجود نمی باشد</h4>
      </section>
    )
  }

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
          <p> {total} تومان</p>
        </div>
        <button className="btn-footer" onClick={clearCart}>حذف همه</button>
      </footer>
    </section>
  )
}

export default CartContainer;