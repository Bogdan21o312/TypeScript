import React, {FC} from 'react';
import classes from "./Button.module.scss";

interface ButtonProps {
    children: any,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Index: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Index;