import * as React from 'react';

import Nav from '@steroidsjs/core/ui/nav/Nav';

export const items = [
    {
        id: 'one',
        label: 'One',
        icon: 'import',
    },
    {
        id: 'two',
        label: 'two',
        icon: 'default',
    },
    {
        id: 'three',
        label: 'three',
        icon: 'edit',
        disabled: true,
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
        <Nav
            items={items}
            layout="icon"
        />
    </div>
);
