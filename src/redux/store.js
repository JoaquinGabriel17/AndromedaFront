
// import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
// import { ThunkMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = createStore(  reducer,applyMiddleware(thunk)  )

export default store

