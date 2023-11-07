import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Redux
import { Provider } from 'react-redux' // guardar dados e compartilhar entre a aplicação
import {store} from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
