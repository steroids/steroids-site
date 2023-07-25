import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './GettingStarted.scss';

export default function GettingStarted() {
    const bem = useBem('GettingStarted');

    return (
        <div className={bem.block()}>
            Getting_Started
        </div>
    );
}
