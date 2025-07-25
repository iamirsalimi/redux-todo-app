import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, removeTodo } from '../../Redux/Store/Todos'
import { FaCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function Todo({ id , title , isDone }) {
    let dispatch = useDispatch()

    // console.log(id , title)

    return (
        <div className="todo">
            <li className={`todo-item ${isDone ? 'completed' : ''}`}>{title}</li>
            <button className="complete-btn" onClick={e => dispatch(updateTodo(id))}>
                <FaCheck className="" />
            </button>
            <button className="trash-btn" onClick={e => dispatch(removeTodo(id))}>
                <MdDeleteOutline className="" />
            </button>
        </div>
    )
}
