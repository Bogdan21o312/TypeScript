import React, {ChangeEvent, useState} from 'react';
import NewTodoForm from "./components/NewTodoForm";
import {Todo} from "./@types";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

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

    const toggleTodo = (id: Todo['id']) => {
        setTodos((todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                completed: !todo.completed,
            }
        })))
    }

    const removeTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <NewTodoForm handleClick={addTodo}/>
            <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
}

export default App;
