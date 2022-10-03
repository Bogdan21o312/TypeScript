import React, {FC} from 'react';

interface TodoItemProps {
    id: string | number,
    title: string,
    completed: boolean,
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
    return (
        <li>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
};

export default TodoItem;