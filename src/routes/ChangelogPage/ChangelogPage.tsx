import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Title} from '@steroidsjs/core/ui/typography';

import './ChangelogPage.scss';

export default function ChangelogPage() {
    const bem = useBem('ChangelogPage');

    return (
        <div className={bem.block()}>
            <Title
                type='h2'
                content={__('Что нового в Steroids v3')}
            />
            <Title
                type='h3'
                content={__('Общие изменения')}
            />
            <Title
                type='h3'
                content={__('Обновления в компонентах')}
            />
            <Title
                type='h3'
                content={__('Другие изменения')}
            />
        </div>
    );
}
