import { useState } from "react";
import "./todoitem.css";


function ToDoForm({ onAdd }) {
  const [text, setText] = useState("");
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        className="inp"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default ToDoForm;
