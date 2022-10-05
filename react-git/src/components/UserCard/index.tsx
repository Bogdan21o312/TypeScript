import UserInfo from '../UserInfo';
import styles from './UserCard.module.scss';
import UserStat from "../UserStat";
import {LocalGitHubUser} from "../../@types/user";
import UserTitle from "../UserTitle";

interface UserCardProps extends LocalGitHubUser {
}

const UserCard = (props: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <img
                src={props.avatar_url}
                alt={props.login}
                className={styles.avatar}
            />
            <UserTitle
                created_at={props.created_at}
                login={props.login}
                name={props.name}
            />
            <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
                {props.bio || 'This profile has no bio'}
            </p>
            <UserStat
                public_repos={props.public_repos}
                followers={props.followers}
                following={props.following}
            />
            <UserInfo
                blog={props.blog}
                company={props.company}
                location={props.location}
                twitter_username={props.twitter_username}
            />
        </div>
    );
};

export default UserCard