import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        icon: 'user',
    },
    {
        id: 2,
        name: 'Petr',
        surname: 'Petrov',
        icon: 'user',
    },
    {
        id: 3,
        name: 'John',
        surname: 'Doe',
        icon: 'user',
    },
];

export const columns = [
    {
        label: 'Default',
        attribute: 'name',
        icon: {
            property: 'icon',
            isLeft: true,
        },
        valueView: 'IconColumnView',
    },
    {
        label: 'Just Icon',
        icon: {
            property: 'icon',
        },
        valueView: 'IconColumnView',
    },
    {
        label: 'With icon right',
        attribute: 'name',
        icon: {
            property: 'icon',
        },
        valueView: 'IconColumnView',
    },
];

/**
 * Text with subtitle
 * @order 1
 * @col 8
 */
export default () => (
    <>
        <Grid
            listId='GridIconDemo'
            items={items}
            columns={columns}
        />
    </>
);
