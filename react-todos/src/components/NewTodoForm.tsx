import React, {ChangeEventHandler, FC} from 'react';

interface NewTodoFormProps {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    handleClick: () => void,
}

const NewTodoForm: FC<NewTodoFormProps> = ({ value, onChange, handleClick, }) => {
    return (
        <div>
            <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="new todo"
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    );
};

export default NewTodoForm;