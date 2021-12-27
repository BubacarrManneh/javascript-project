import React from 'react'
import { faCheckSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        console.log("Print todos", todo)
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const checkHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    
    return (
        <div>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                <FontAwesomeIcon onClick={checkHandler} icon={faCheckSquare} className={`delete ${todo.completed ? "completed" : "" }`} ></FontAwesomeIcon>
                <span className={`TodoText ${!todo.completed ? "" : "completed" }`}>{text}</span>      
                <FontAwesomeIcon onClick={deleteHandler} icon={faTrash} className='delete' ></FontAwesomeIcon>            
            </li>
        </div>
    )
}

export default TodoList
