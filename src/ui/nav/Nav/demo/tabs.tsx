import * as React from 'react';

import Nav from '@steroidsjs/core/ui/nav/Nav';

export const items = [
    {
        id: 'one',
        label: 'One',
    },
    {
        id: 'two',
        label: 'two',
    },
    {
        id: 'three',
        label: 'three',
        disabled: true,
    },
];

const sizes = [
    'sm',
    'md',
    'lg',
];

/**
 * Tabs
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: 30}}>
        {sizes.map((size, sizeIndex) => (
            <Nav
                key={sizeIndex}
                size={size}
                items={items}
                layout="tabs"
            />
        ))}
    </div>
);
