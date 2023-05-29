import * as React from 'react';

import Nav from '@steroidsjs/core/ui/nav/Nav';

export const items = [
    {
        id: 'one',
        label: 'One',
    },
    {
        id: 'two',
        label: 'Two',
    },
    {
        id: 'three',
        label: 'Three',
    },
];

/**
 * Basic
 * @order 1
 * @col 6
 */
export default () => (
    <>
        <Nav items={items} />
    </>
);
