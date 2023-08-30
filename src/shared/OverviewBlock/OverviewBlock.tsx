import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Title, Text} from '@steroidsjs/core/ui/typography';
import List from '@steroidsjs/core/ui/list/List';
import OverviewItem from './OverviewItem';

import './OverviewBlock.scss';

interface IOverviewBlockProps {
    title: string,
    description?: string,
    listId: string,
    items: Record<string, any>[],
    className?: string,
}

export default function OverviewBlock(props: IOverviewBlockProps) {
    const bem = useBem('OverviewBlock');

    return (
        <div className={bem(bem.block(), props.className)}>
            <Title
                className={bem.element('title')}
                content={props.title}
            />
            <Text
                className={bem.element('description')}
                content={props.description}
            />
            <List
                listId={props.listId}
                items={props.items}
                itemView={OverviewItem}
            />
        </div>
    );
}
