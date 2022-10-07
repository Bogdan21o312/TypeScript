import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user, index) =>
                <div
                    style={{border: "1px solid red", margin: 20, padding: 10}}
                    key={index}>
                    <span>{user.id}  </span>
                    <span>{user.name}</span>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <br/>
                    <div>{user.address.suite}</div>
                    <div>{user.address.city}</div>
                    <div>{user.address.zipcode}</div>
                    <br/>
                    <div>{user.address.geo.lat}</div>
                    <div>{user.address.geo.lng}</div>
                    <br/>
                    <br/>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                    <br/>
                    <div>{user.company.name}</div>
                    <div>{user.company.catchPhrase}</div>
                    <div>{user.company.bs}</div>
                </div>
            )}
        </div>
    );
};

export default UserList;