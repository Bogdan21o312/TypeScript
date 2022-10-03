import React, {FC} from 'react';
import {Todo} from "../@types";

const TodoItem: FC<Todo> = ({ id, title, completed }) => {

    return (
        <li>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
};

export default TodoItem;