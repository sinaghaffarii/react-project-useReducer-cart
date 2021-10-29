import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { AppProvider } from "./Components/Context";


ReactDOM.render(<AppProvider><App/></AppProvider> , document.getElementById('root'))