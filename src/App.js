import './App.css';
import ToDoFooter from './to-do-footer';
import ToDoForm from './to-do-form';
import ToDoItem from './to-do-item';
import ToDoList from './to-do-list';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id : Math.random(),
      text : 'Learn JS',
      isCompleted : false
    },
    {
      id : Math.random(),
      text : 'Learn CSS',
      isCompleted : false
    },
    {
      id : Math.random(),
      text : 'Learn React',
      isCompleted : false
    },
  ])

  return (
    <div className="App">

       <ToDoForm onAdd={(text)=>{
        setTodos(
          [
            ...todos,
            {
              id : Math.random(),
              text : text,
              isCompleted : false
            }
          ]
        )
       }}/>
       <ToDoList todos={todos}
        onDelete={(todo)=>{
          setTodos(todos.filter((t)=> t.id !== todo.id))
        }
        }
        onChange={(newTodo)=>{
         setTodos(todos.map((todo)=>{
            if (todo.id === newTodo.id) {
              return newTodo;
            } else {
              return todo;
            }
          }));
        }}
       />       
       <ToDoFooter todos={todos} onClearCompleted={()=>{
        setTodos(todos.filter((todo) => !todo.isCompleted))
       }}/>
    </div>
  );
}

export default App;
