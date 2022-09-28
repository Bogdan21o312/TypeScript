import React from 'react';
import './App.css';
import Title from "./components/Title";

function App() {
    return (
        <div className="App">
            <main className="App-main">
                <Title title={'Hello from react TSX'}/>
            </main>
        </div>
    );
}

export default App;
