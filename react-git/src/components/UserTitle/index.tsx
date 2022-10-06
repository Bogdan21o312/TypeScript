import classes from './UserTitle.module.scss';
import {LocalGitHubUser} from "../../@types/user";

interface UserTitleProps extends Pick<LocalGitHubUser,
    'name' | 'login' | 'created_at'> {
}

const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

const UserTitle = ({created_at, login, name}: UserTitleProps) => {
    const joinedDate = localDate.format(new Date(created_at))

    return (
        <div className={classes.userTitle}>
            <div className={classes.userTitleNameLogin}>
                <h2>{name}</h2>
                <h3>{login}</h3>
            </div>
            <span>{joinedDate}</span>
        </div>
    );
};

export default UserTitle
