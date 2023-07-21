import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';

import './AnimatedIcons.scss';

const DECORATIONS = [
    'decoration1',
    'decoration1',
    'decoration2',
    'decoration3',
    'decoration4',
    'decoration5',
    'decoration1',
    'decoration6',
];

export default function AnimatedIcons() {
    const bem = useBem('AnimatedIcons');

    return (
        <div className={bem.block()}>
            {DECORATIONS.map((deco, decoIndex) => (
                <Icon
                    key={decoIndex}
                    name={deco}
                    className={bem.element('item')}
                />
            ))}
        </div>
    );
}
