import React, {useEffect, useState} from 'react';
import classes from "./Theme.module.scss";
import { ReactComponent as MoonIcon } from "../../assets/img/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/img/icon-sun.svg";

const Index = () => {
    const [isDark, setDark] = useState(false)
    const themeText = isDark ? 'Light' : 'Dark'
    const ThemeIcon = isDark ? SunIcon : MoonIcon

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div className={classes.themes} onClick={() => setDark(!isDark)}>
            <span className={classes.themesText}>{themeText}</span>
            <ThemeIcon className={classes.themesIcon} />
        </div>
    );
};

export default Index;