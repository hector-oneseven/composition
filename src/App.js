import React from "react";
import {TodoCounter} from './TodoCounter'
// import './App.css';
const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar cebolla1', completed: false},
  {text: 'Cortar cebolla2', completed: false}
]
function App(props) {
  return (
  <React.Fragment>
    <TodoCounter/>
    {/* <TodoSearch/> */}
    <input placeholder="Cebolla" />
    {/* <TodoList>
      {todos.map(todo => (
        <TodoItem/>
      ))}
    </TodoList> */}
    {/* <CreateTodoButton/> */}
    <button>+</button>
  </React.Fragment>
   
  );
}

export default App;
