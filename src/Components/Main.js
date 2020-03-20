import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData.js";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            currentToDoArr: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(id) {
        this.setState(prevState => {
            const updatedToDoArr = prevState.currentToDoArr.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            return {
                currentToDoArr: updatedToDoArr
            }
        })
    };

    render() {
        const todoComponents = this.state.currentToDoArr.map(item => <TodoItem item={item} key={item.id} handleChange={this.handleChange} />)
        return (
            <div>
                <div className="todo-list">
                    {todoComponents}
                </div>
            </div>
        )
    } ; 
};

export default Main;
