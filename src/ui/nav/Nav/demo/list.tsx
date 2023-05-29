import * as React from 'react';

import Nav from '@steroidsjs/core/ui/nav/Nav';

export const items = [
    {
        id: 'One',
        label: 'One',
        items: [
            {
                id: 'Four',
                label: 'Four',
            },
        ],
    },
    {
        id: 'Two',
        label: 'Two',
        items: [
            {
                id: 'Five',
                label: 'Five',
            },
        ],
    },
    {
        id: 'Three',
        label: 'Three',
        items: [
            {
                id: 'Six',
                label: 'Six',
            },
        ],
    },
];

/**
 * Navs
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: 30}}>
        <Nav
            items={items}
            layout="list"
        />
    </div>
);
