import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (todos , action) => {
            todos.push(action.payload)
        },
        removeTodo : (todos , action) => {
            return todos.filter(todo => todo.id == action.payload)
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
// console.log(slice);

// // Actions
// const addTodo = "ADD_TODO";
// const removeTodo = "REMOVE_TODO";
// const doTodo = "DO_TODO";

// // Reducer
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTodo: {
//       let newTodo = action.payload;
//       return [...state, newTodo];
//     }
//     case removeTodo: {
//       const newState = [...state].filter((todo) => todo.id !== action.id);
//       return newState;
//     }
//     case doTodo: {
//       const newState = [...state].some((todo) => {
//         if(todo.id == action.id){
//             todo.isDone = !todo.isDone
//             return true
//         }
//       } );
//       return newState;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// // Action Creators
// export const addTodoAction = (title) => {
//   return {
//     type: addTodo,
//     payload: {
//         id : crypto.randomUUID(),
//         title , 
//         isDone : false
//     },
//   };
// };

// export const removeTodoAction = (id) => {
//   return {
//     type: removeTodo,
//     id,
//   };
// };

// export const doTodoAction = (id) => {
//   return {
//     type: doTodo,
//     id,
//   };
// };
