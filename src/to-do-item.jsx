import "./todoitem.css"

function ToDoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label className="lbl">
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                   e.target.checked
                   onChange(
                    {
                        ...todo,
                        isCompleted :  e.target.checked,
                    }
                   )
                }} />
                   {todo.text}
                <button className="btn" onClick={()=> onDelete(todo)}>x</button>
            </label>
        </div>
    )
}

export default ToDoItem;