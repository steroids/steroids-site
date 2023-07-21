import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Card} from '@steroidsjs/core/ui/content';

import './ResourceCard.scss';

interface IResourceCardProps {
    img: string;
    title: string;
    description: string
}

export default function ResourceCard(props: IResourceCardProps) {
    const bem = useBem('ResourceCard');

    return (
        <Card
            className={bem.block()}
            title={props.title}
            description={props.description}
            cover={props.img}
        />
    );
}
