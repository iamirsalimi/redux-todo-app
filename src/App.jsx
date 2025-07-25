import { useState } from 'react'

import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import { useDispatch } from 'react-redux'
import { addTodo } from './Redux/Store/Todos'
import { GoPlus } from "react-icons/go";

export default function App() {
  const [title , setTitle] = useState('')

  const dispatch = useDispatch()


  const addNewTodo = e => {
    e.preventDefault()
    dispatch(addTodo({id : crypto.randomUUID() , title , isDone : false}))
    setTitle('')
  }

  return (
    <>
      <header>
        <h1>TodoList</h1>
      </header>
      <form action="">
        <input type="text" className="todo-input !text-gray-700 text-xl" value={title} onChange={e => setTitle(e.target.value)} />
        <button className="todo-button flex items-center justify-center max-w-fit" type="submit" onClick={addNewTodo}>
          <GoPlus className="" />
        </button>
        <div className="select">
          <select name="todos" className="filter-todo bg-white">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <TodoList />
        </ul>
      </div>

    </>
  )
}