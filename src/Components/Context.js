import React, {useContext, useReducer, useEffect} from 'react'
import cartItems from './data'
import reducer from './Reducer'

const AppContext = React.createContext();

const url = 'https://course-api.com/react-useReducer-cart-project'

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

  const fetchData = async () => {
    dispatch({type: 'LOADING'})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type: 'DISPLAY_ITEMS', payload: cart})
  }

  useEffect(() => {
    fetchData()
  }, [])

  const toggleAmount = (id, type) => {
    dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
