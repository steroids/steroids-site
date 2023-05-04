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
            attribute: 'icon',
        },
        valueView: 'ContentColumnView',
        subtitleAttribute: 'surname',
    },
    {
        label: 'Just Icon',
        icon: {
            attribute: 'icon',
        },
        valueView: 'ContentColumnView',
    },
    {
        label: 'With icon left',
        attribute: 'name',
        icon: {
            attribute: 'icon',
            isLeft: true,
        },
        subtitleAttribute: 'surname',
        valueView: 'ContentColumnView',
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
