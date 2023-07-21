import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {Title, Text} from '@steroidsjs/core/ui/typography';

import './DemoCard.scss';

interface IDemoCardProps {
    title: string,
    demo: React.FC,
    sourceUrl: string,
    id?: string;
}

export default function DemoCard(props: IDemoCardProps) {
    const bem = useBem('DemoCard');
    const {demo: Demo} = props;

    return (
        <div
            className={bem.block()}
            id={props.id}
        >
            <div className={bem.element('header')}>
                <Title
                    className={bem.element('title')}
                    content={props.title}
                />
                <a
                    className={bem.element('link')}
                    href={props.sourceUrl}
                    target='_blank'
                    rel="noreferrer"
                >
                    {__('Github')}
                </a>
            </div>
            <div className={bem.element('content')}>
                <Demo />
            </div>
        </div>
    );
}
