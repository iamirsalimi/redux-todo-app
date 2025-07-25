import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (todos , action) => {
            todos.push(action.payload)
        },
        removeTodo : (todos , action) => {
            return todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (todos , action) => {
            todos.some(todo => {
                if(todo.id == action.payload){
                    todo.isDone = !todo.isDone
                    return true
                }
            })
        },
    }
})

console.log(slice)
export const {addTodo , removeTodo , updateTodo} = slice.actions
export default slice.reducer