import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const todoForm = ({setInputText, inputText, setTodos, todos}) => {
    const todosHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodos = (e) => {
        e.preventDefault()
        if(inputText.length){
            setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        }
        setInputText("")
    }
    return (
        <form className='add text-center my-4'>
            <label className='text-light'>Add a new todo....</label>
            <input onChange={todosHandler} value={inputText} className='form-control m-auto' type='text' name='add' ></input>
            <button onClick={submitTodos} className='btn btn-success my-4' name='submit' type='submit'>Add</button>
        </form>
    )
}
export default todoForm