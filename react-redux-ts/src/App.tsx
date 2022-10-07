import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <UserList/>
                <hr/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
