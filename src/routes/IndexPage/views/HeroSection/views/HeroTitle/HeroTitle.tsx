import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './HeroTitle.scss';
import {Icon} from '@steroidsjs/core/ui/content';

export default function HeroTitle() {
    const bem = useBem('HeroTitle');

    return (
        <h1 className={bem.block()}>
            <span className={bem.element('letters')}>
                Ster
            </span>
            <Icon
                name="logo"
                className={bem.element('icon')}
            />
            <span className={bem.element('letters')}>
                ids
            </span>
        </h1>
    );
}
