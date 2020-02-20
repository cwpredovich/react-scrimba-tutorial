import React from "react";
import TodoItem from "./TodoItem";

function Main() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let styles = {};

    if (hours < 12) {
        timeOfDay = "morning";
        styles = {backgroundColor: "green"};
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles = {backgroundColor: "yellow"};
    } else {
        timeOfDay = "evening";
        styles = {backgroundColor: "pink"};
    };

    return (
        <div>
            <p style={styles}>Good {timeOfDay}!</p>
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