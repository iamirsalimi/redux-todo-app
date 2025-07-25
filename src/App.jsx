import { useState } from 'react'

import "./App.css";
import TodoList from "./Components/TodoList/TodoList";

export default function App() {

  return (
    <>
      <header>
        <h1>TodoList</h1>
      </header>
      <TodoList />
    </>
  )
}