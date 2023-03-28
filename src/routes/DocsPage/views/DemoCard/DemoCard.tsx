import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {Title, Text} from '@steroidsjs/core/ui/typography';

import './DemoCard.scss';

interface IDemoCardProps {
    title: string,
    description: string,
    demo: React.FC,
}

export default function DemoCard(props: IDemoCardProps) {
    const bem = useBem('DemoCard');
    const {demo: Demo} = props;

    return (
        <div className={bem.block()}>
            <div className={bem.element('header')}>
                <Title
                    className={bem.element('title')}
                    content={props.title}
                />
                <a
                    className={bem.element('link')}
                    href="#"
                >
                    {__('Source')}
                </a>
            </div>
            <Text
                className={bem.element('description')}
                content={props.description}
            />
            <div className={bem.element('content')}>
                <Demo />
            </div>
        </div>
    );
}
