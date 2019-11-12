import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {createStore ,applyMiddleware} from 'redux';
import reducers from './reducers/index'
import App from './components/App'
const store= createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App></App>
</Provider>,document.querySelector('#root'))
