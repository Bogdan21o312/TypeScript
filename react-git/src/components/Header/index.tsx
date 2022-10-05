import React from 'react';
import classes from "./Header.module.scss";
import Theme from "../Theme";

const Index = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Logo
            </div>
            <Theme/>
        </header>
    );
};

export default Index;