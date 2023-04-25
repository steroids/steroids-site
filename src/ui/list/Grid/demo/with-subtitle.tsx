import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
    },
    {
        id: 2,
        name: 'Petr',
        surname: 'Petrov',
    },
    {
        id: 3,
        name: 'John',
        surname: 'Doe',
    },
];

export const columns = [
    {
        label: 'Name',
        attribute: 'name',
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
            listId='GridSubtitleDemo'
            items={items}
            columns={columns}
        />
    </>
);
