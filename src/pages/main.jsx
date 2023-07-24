import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BG from './BG.jsx' //BG means background
import '../css/Index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//testing BG
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BG />
//   </React.StrictMode>,
// )

