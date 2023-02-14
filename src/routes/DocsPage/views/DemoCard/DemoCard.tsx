import React, {memo} from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import './DemoCard.scss';

interface IDemoCardProps {
    title: string,
    description: string;
    demo: () => React.ReactElement;
}

function DemoCard({demo, title, description}: IDemoCardProps) {
    const bem = useBem('DemoCard');

    return (
        <article className={bem.block()}>
            <header>
                <h1 className={bem.element('title')}>{title}</h1>
                <a href="#">Source</a>
            </header>
            <main className={bem.element('description')}>{description}</main>
            <footer className={bem.element('content')}>{demo()}</footer>
        </article>
    );
}

export default memo(DemoCard);
