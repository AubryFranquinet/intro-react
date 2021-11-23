import React, { useState }from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    const [checked, setChecked] = useState(false);
    
    const handleChange = (e) => {

        setChecked(!checked);
        console.log(checked);
        console.log(e);
    };

    return (
        <div className="todoList">
         <h3>Todo List</h3>
            {todos.map((todo) => (
                <div key={uuidv4()}>
                    <input type="checkbox" onChange={handleChange} checked={checked}/>
                    {todo}
                </div>
            ))}
        </div>
        
    )
    
}





