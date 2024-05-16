import ToDoItem from './to-do-item'
import './to-do-list.css'

function ToDoListist({todos, onChange, onDelete}) {
    
    return (
        <div >
           {
            todos.map((todo)=>{
                return ( 
                    <ToDoItem key={todo.id} 
                    todo={todo}
                    onChange={onChange}
                    onDelete={onDelete}
                    />
                )
            })
           }
        </div>
    )
}
{/* <div key={todo.id}>{todo.text}</div> */}
export default ToDoListist