import React from 'react';

type TitleProps = {
    title: string
    children?: string
}

const Title = ({ title, children }: TitleProps) => {
    return (
        <h2>
            {title}{children}
        </h2>
    );
};

export default Title;