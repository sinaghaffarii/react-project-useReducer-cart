const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {...state, cart: []}
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id !== action.payload)
      }
    case 'DECREASE':
      let deCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {...cartItem, amount: cartItem.amount - 1}
        }
        return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)
      return {...state, cart: deCart}
    case 'INCREASE':
      let inCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {...cartItem, amount: cartItem.amount + 1}
        }
        return cartItem
      })
      return {...state, cart: inCart}
    // ----- for amount product and total bag
    case 'GET_TOTALS':
      let {amount, total} = state.cart.reduce((cartTotal, cartItem) => {
        const {price, amount} = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      }, {
        total: 0,
        amount: 0
      })
      // -------- fix 2 digits then dot amount
      total = parseFloat(total.toFixed(2))
      return {...state, amount, total}

    case 'LOADING':
      return {...state, loading: true}
    case 'DISPLAY_ITEMS':
      return {...state, loading: false, cart: action.payload}


    case 'TOGGLE_AMOUNT':
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return {...cartItem, amount: cartItem.amount + 1}
          }
          if (action.payload.type === 'dec') {
            return {...cartItem, amount: cartItem.amount - 1}
          }
        }
        return cartItem
      }).filter((cartItem) => cartItem.amount !== 0)
      return {...state, cart: tempCart}
  }


  throw new Error('no matching action type')
}

export default reducer;