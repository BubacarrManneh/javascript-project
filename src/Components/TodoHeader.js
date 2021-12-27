import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoHeader = () => {
    return (
        <header className='text-center text-light my-4'>
            <h1 className='mb-4'>Todo List</h1>
            <form className='search'>
            <input className='form-control m-auto' type='text' name='search' placeholder='Search todo item'></input>
            </form>
        </header>
    )
}

export default TodoHeader
