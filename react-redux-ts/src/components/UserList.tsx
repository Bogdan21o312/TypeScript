import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    );
};

export default UserList;