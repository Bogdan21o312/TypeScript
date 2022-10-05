import {ReactComponent as CompanyIcon} from '../../assets/img/icon-company.svg';
import {ReactComponent as LocationIcon} from '../../assets/img/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../../assets/img/icon-twitter.svg';
import {ReactComponent as BlogIcon} from '../../assets/img/icon-website.svg';
import styles from './UserInfo.module.scss';
import {LocalGitHubUser} from "../../@types/user";
import InfoItem, {InfoItemProps} from "../InfoItem";

interface UserInfoProps extends Pick<LocalGitHubUser,
    'blog' | 'company' | 'location' | 'twitter_username'> {
}


const UserInfo = ({blog, company, location, twitter_username}: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon/>,
            text: location,
        },
        {
            icon: <BlogIcon/>,
            text: blog,
            isLink: true,
        },
        {
            icon: <TwitterIcon/>,
            text: twitter_username,
        },
        {
            icon: <CompanyIcon/>,
            text: company,
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (
                <InfoItem {...item} key={index}/>
            ))}
        </div>
    );
}

export default UserInfo
