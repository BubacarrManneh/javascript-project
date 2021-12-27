import React from 'react'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        console.log("Print todos", todo)
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    return (
        <div>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {/* <FontAwesomeIcon onClick={checkHandler} icon={faCheckSquare} className='delete' ></FontAwesomeIcon> */}
                <span className='TodoText'>{text}</span>         
                <FontAwesomeIcon onClick={deleteHandler} icon={faTrash} className='delete' ></FontAwesomeIcon>            
            </li>
        </div>
    )
}

export default TodoList
