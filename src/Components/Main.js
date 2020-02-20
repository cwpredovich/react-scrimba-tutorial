import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

function Main() {

    const todoComponents = todosData.map(item => <TodoItem todo={item} key={item.id} />)

    return (
        <div>
            <div className="todo-list">
                {todoComponents}
            </div>
        </div>
    )
}

export default Main;

/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/