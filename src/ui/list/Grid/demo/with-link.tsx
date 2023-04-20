import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        url: 'https://steroids.kozhin.dev',
    },
    {
        id: 2,
        name: 'Petr',
        surname: 'Petrov',
        url: 'https://steroids.kozhin.dev',
    },
    {
        id: 3,
        name: 'John',
        surname: 'Doe',
        url: 'https://steroids.kozhin.dev',
    },
];

export const columns = [
    {
        label: 'Name',
        link: {
            property: 'name',
            urlProperty: 'url',
        },
        subtitle: 'surname',
        valueView: 'LinkColumnView',
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
            listId='GridLinkDemo'
            items={items}
            columns={columns}
        />
    </>
);
