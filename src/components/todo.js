import React, { useState }from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <div className="todoList">
         <h3>Todo List</h3>
            {todos.map((todo) => (
                <div key={uuidv4()}>
                    <input type="checkbox" /> 
                    {todo}
                </div>
            ))}
        </div>
        
    )
    
}



