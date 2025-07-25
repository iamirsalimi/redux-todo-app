import { useState } from 'react'
import { useSelector , useDispatch } from "react-redux";

import { addTodo } from '../../Redux/Store/Todos'
import { GoPlus } from "react-icons/go";

import Todo from "../Todo/Todo";

export default function TodoList() {
    const [title, setTitle] = useState('')
    const [filterTodo, setFilterTodo] = useState('all')
    const todos = useSelector(state => state)

    const dispatch = useDispatch()

    const addNewTodo = e => {
        e.preventDefault()
        dispatch(addTodo({ id: crypto.randomUUID(), title, isDone: false }))
        setTitle('')
    }

    return (
        <>
            <form action="">
                <input type="text" className="todo-input !text-gray-700 text-xl" value={title} onChange={e => setTitle(e.target.value)} />
                <button className="todo-button flex items-center justify-center max-w-fit" type="submit" onClick={addNewTodo}>
                    <GoPlus className="" />
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo bg-white" value={filterTodo} onChange={e => setFilterTodo(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {filterTodo == 'all' && todos.map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}

                    {filterTodo == 'completed' && todos.filter(todo => todo.isDone).map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}

                    {filterTodo == 'incomplete' && todos.filter(todo => !todo.isDone).map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}
                </ul>
            </div>
        </>
    );
}
