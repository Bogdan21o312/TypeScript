import React, {useState} from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import {defaultUser} from "./mock";
import Search from "./components/Search";
import {GitHubError, GitHubUser, LocalGitHubUser} from "./@types/user";
import {isGitHubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/exract-local-user";

const BASE_URL = 'https://api.github.com/users/';

const App = () => {
    const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = await res.json() as GitHubUser | GitHubError;

        if (isGitHubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    }
    return (
        <Container>
            <Header/>
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user && (
                <UserCard
                    {...user}
                />
            )}
        </Container>
    );
}

export default App;
