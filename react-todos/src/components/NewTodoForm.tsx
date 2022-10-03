import React, {ChangeEventHandler, FC, useRef} from 'react';

interface NewTodoFormProps {
    handleClick: (text: string) => void,
}

const NewTodoForm: FC<NewTodoFormProps> = ({ handleClick, }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value)
        }
    }

    return (
        <div>
            <input
            type="text"
            placeholder="new todo"
            ref={inputRef}
            />
            <button onClick={onClick}>Add todo</button>
        </div>
    );
};

export default NewTodoForm;