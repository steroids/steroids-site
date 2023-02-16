import React, {memo} from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import './DemoCard.scss';

interface IDemoCardProps {
    title: string,
    description: string,
    demo: React.FC,
}

function DemoCard(props: IDemoCardProps) {
    const bem = useBem('DemoCard');
    const {demo: Demo} = props;

    return (
        <div className={bem.block()}>
            <div className={bem.element('header')}>
                <h3 className={bem.element('title')}>
                    {props.title}
                </h3>
                <a href="#">
                    {__('Source')}
                </a>
            </div>
            <div className={bem.element('description')}>
                {props.description}
            </div>
            <div className={bem.element('content')}>
                <Demo />
            </div>
        </div>
    );
}

export default memo(DemoCard);
