import React, {FC} from 'react';
import classes from "./Search.module.scss";
import Button from "../Button";
import {ReactComponent as SearchIcon} from '../../assets/img/icon-search.svg';

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void,
}

type FormFields = {
    username: HTMLInputElement,
}

const Index: FC<SearchProps> = ({hasError, onSubmit}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;

        if (text.trim()) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={classes.search}>
                <div className={classes.search__content}>
                    <label htmlFor="search" className={classes.label}>
                        <SearchIcon/>
                    </label>
                    <input
                        type="text"
                        className={`${classes.textField} ${hasError ? classes.error : '' }`}
                        id="search"
                        name="username"
                        placeholder="Search GitHub username..."
                    />
                </div>
                <Button>Search</Button>
            </div>
        </form>
    );
};

export default Index;