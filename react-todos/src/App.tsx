import React, {ChangeEvent, useState} from 'react';
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

function App() {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<string[]>([])

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const addTodo = () => {
        setTodos([text, ...todos])
        setText('')
    }


  return (
    <div>
        <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo}/>
        <TodoItem title={'React todo 1'} id={1} completed={true}/>
    </div>
  );
}

export default App;
