import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div>
            <UserList/>
            <br/>
            <hr/>
            <br/>
            <TodoList/>
        </div>
    );
}

export default App;
