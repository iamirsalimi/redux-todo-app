import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './Redux/store'

// import { addProductAction } from './Redux/Store/Products.js'

// store.dispatch(addProductAction({id : 1 , title : 'laptop'  , price : 90_000_000}))
// store.dispatch(addProductAction({id : 2 , title : 'phone'  , price : 20_000_000}))
// store.dispatch(addProductAction({id : 3 , title : 'milk'  , price : 50_000}))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
  ,
)
