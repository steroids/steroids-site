import React, {memo} from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import './DemoCard.scss';

interface IDemoCardProps {
    title: string,
    description: string,
    Demo: React.FC,
}

function DemoCard(props: IDemoCardProps) {
    const bem = useBem('DemoCard');

    const {Demo} = props;

    return (
        <div className={bem.block()}>
            <div className={bem.element('header')}>
                <h3 className={bem.element('title')}>
                    {__(props.title)}
                </h3>
                <a href="#">
                    {__('Source')}
                </a>
            </div>
            <div className={bem.element('description')}>
                {__(props.description)}
            </div>
            <div className={bem.element('content')}>
                <Demo />
            </div>
        </div>
    );
}

export default memo(DemoCard);
