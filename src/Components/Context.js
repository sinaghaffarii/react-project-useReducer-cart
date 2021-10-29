import React, { useState , useContext, useReducer} from 'react'
import cartItems from './data'
import reducer from './Reducer'

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}


const AppProvider = ({children}) => {
  // ----- with Context
  // const [cart, setCart] = useState(cartItems)

  // ------ with useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // ----- for clear all
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  // ---- for clear one product
  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  // ---- Increase amount Product
  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }
  // ---- Decrease amount Product
  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id})
  }

  return(
      <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
      >
        {children}
      </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext , AppProvider }
