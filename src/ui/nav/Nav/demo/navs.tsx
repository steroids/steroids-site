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
    },
];

const sizes = [
    'sm',
    'md',
    'lg',
];

/**
 * Navs
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: 30}}>
        {sizes.map((size, sizeIndex) => (
            <Nav
                key={sizeIndex}
                size={size}
                items={items}
                layout="navbar"
            />
        ))}
    </div>
);
