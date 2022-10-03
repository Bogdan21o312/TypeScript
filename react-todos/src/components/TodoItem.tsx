import React, {FC} from 'react';
import {Todo} from "../@types";

interface TodoItem extends Todo {
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
}

const TodoItem: FC<TodoItem> =
    ({
         id,
         title,
         completed,
         toggleTodo,
         removeTodo,
     }) => {

        return (
            <li>
                <input
                    type="checkbox" checked={completed}
                    onChange={() => toggleTodo(id)}
                />
                <span>{title}</span>
                <span onClick={() => removeTodo(id)}>&times;</span>
            </li>
        );
    };

export default TodoItem;
