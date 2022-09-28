import React from 'react';
import './App.css';
import Title from "./components/Title";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <main className="App-main">
                <Title title={'Hello from react TSX'}/>
                <Counter title={'Counter'}/>
            </main>
        </div>
    );
}

export default App;
