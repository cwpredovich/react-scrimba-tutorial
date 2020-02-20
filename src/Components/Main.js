import React from "react";
import TodoItem from "./TodoItem";

function Main() {
    return (
        <div>
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default Main;