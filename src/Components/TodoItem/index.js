/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = (props) => {
    // const todoItem = props.todoItem;
    // const emitTodoItemDataUpdate = props.emitTodoItemDataUpdate;
    const {todoItem, emitTodoItemDataUpdate} = props;

    return (
        <div>
            <React.Fragment>
                <input type="checkbox" onChange={() => {
                    todoItem.isDone = !todoItem.isDone;
                    emitTodoItemDataUpdate(todoItem);
                console.log(todoItem.isDone); //this is to see the change in the console
                }} />
                <label style={todoItem.isDone ? { textDecoration: "line-through" } : null}>
                 {todoItem.itemName}</label>
            </React.Fragment>
        </div>
    );
};

export default TodoItem;