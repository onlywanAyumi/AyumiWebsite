import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Collage from './Collage.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Collage />
    <App />
  </React.StrictMode>,
)
