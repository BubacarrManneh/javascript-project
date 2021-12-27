import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoHeader from './Components/TodoHeader'
import TodoItems from './Components/TodoItems'
import TodoForm from './Components/TodoForm'


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="container">
    <TodoHeader />
    <TodoItems setTodos={setTodos} todos={todos}/>
    <TodoForm inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
</div>
  );
}

export default App;
