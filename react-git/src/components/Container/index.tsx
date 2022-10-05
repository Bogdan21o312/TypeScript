import React, {FC} from 'react';
import classes from "../../assets/style/Style.module.scss";

interface ContainerProps {
    children: any,
}

const Index: FC<ContainerProps> = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default Index;