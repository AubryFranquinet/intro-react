import React from "react";

const Todo = () => {
    return (
        <div className="todoList">
            <h3>Todos</h3>
            <div>
                <input type="checkbox" id="learn" name="learn" />
                <label for="learn">Learn React</label>
            </div>
            <div>
                <input type="checkbox" id="beAwesome" name="beAwesome" />
                <label for="beAwesome">Be Awesome!</label>
            </div>
        </div>
    )
}

export default Todo;

