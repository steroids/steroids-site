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
 * Links
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: 30}}>
        <Nav
            items={items}
            layout="link"
        />
    </div>
);
