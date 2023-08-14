import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {Title} from '@steroidsjs/core/ui/typography';
import {ELEMENT_TO_OBSERVE_CLASS_NAME} from 'constants/classNames';
import {IDemo} from 'types/IDemo';

import './DemoCard.scss';

export default function DemoCard(props: IDemo) {
    const bem = useBem('DemoCard');
    const {component: Demo} = props;

    return (
        <div
            className={bem(
                bem.block(),
                ELEMENT_TO_OBSERVE_CLASS_NAME,
            )}
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
