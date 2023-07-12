import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Card} from '@steroidsjs/core/ui/content';

import './CreateCard.scss';

interface ICreateCardProps {
    img: string;
    title: string;
    description: string
}

export default function CreateCard(props: ICreateCardProps) {
    const bem = useBem('CreateCard');

    return (
        <Card
            className={bem.block()}
            title={props.title}
            description={props.description}
            cover={props.img}
        />
    );
}
