import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './Components/auth/App'
import configureStore from './store/configureStore'

const store = configureStore()

// to read updated state value
store.subscribe(()=>{
    console.log('state-updated',store.getState())
})

ReactDOM.render(
        <Provider store = { store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
)
