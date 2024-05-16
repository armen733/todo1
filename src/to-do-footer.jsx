import "./todoitem.css"

function ToDoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length

    return(
        <div className="footer"> 
            <span className="span">{completedSize}/{todos.length} completed</span>
            <button className="btn" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default ToDoFooter;