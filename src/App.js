import React from 'react'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import {useGlobalContext} from "./Components/Context";

const App = () => {

  const {loading} = useGlobalContext()

  if(loading) {
    return(
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    )
  }

    return(
        <div>
            <Navbar/>
            <CartContainer/>
        </div>
    )
}


export default App;