import React from "react";
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
// import './App.css';
const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar cebolla', completed: false}
]
function App(props) {
  return (
  <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.index} text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    
  </React.Fragment>
   
  );
}

export default App;
