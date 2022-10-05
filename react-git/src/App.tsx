import React from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    return (
        <Container>
            <Header/>
            <Search hasError={false}/>
        </Container>
    );
}

export default App;
