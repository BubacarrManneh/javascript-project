import React from 'react'
import TodoList from './TodoList'


export const TodoItems = ({todos, setTodos}) => {
    return (
        <ul className='list-group todos mx-auto text-light'>
            {todos.map((todo) => (
                <TodoList todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
            ))}
           
        </ul>
    )
}
export default TodoItems
