import React, {ChangeEvent, useEffect, useState} from 'react';
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";
import {Todo} from "./@types";

function App() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: new Date().toString(),
            title: text,
            completed: false,
        }
        setTodos([newTodo, ...todos])
        setText('')
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data: Todo[]) => {
                setTodos(data)
            })
    }, [])

    return (
        <div>
            <NewTodoForm handleClick={addTodo}/>
            <TodoItem title={'React todo 1'} id={1} completed={true}/>
        </div>
    );
}

export default App;
