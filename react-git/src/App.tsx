import React from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import {defaultUser} from "./mock";

function App() {
    return (
        <Container>
            <Header/>
            <UserCard {...defaultUser}/>
        </Container>
    );
}

export default App;
