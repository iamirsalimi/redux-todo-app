import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Store/Todos'

let store = configureStore({
    reducer : todosReducer
})

export default store