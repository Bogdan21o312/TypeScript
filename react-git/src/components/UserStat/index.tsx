import styles from './UserStat.module.scss';
import {LocalGitHubUser} from "../../@types/user";

export interface UserStatProps extends Pick<
    LocalGitHubUser,
    'public_repos' | 'followers' | 'following'> {
}

const index = ({public_repos, followers, following}: UserStatProps) => (
    <div className={styles.userStat}>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Repos</div>
            <div className={styles.infoNumber}>{public_repos}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Following</div>
            <div className={styles.infoNumber}>{following}</div>
        </div>
        <div className={styles.info}>
            <div className={styles.infoTitle}>Followers</div>
            <div className={styles.infoNumber}>{followers}</div>
        </div>
    </div>
);

export default index