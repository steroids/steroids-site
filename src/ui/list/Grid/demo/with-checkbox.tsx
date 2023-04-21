import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import CheckboxColumnView from '@steroidsjs/core/ui/list/CheckboxColumn/CheckboxColumn';

const items = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        icon: 'user',
    },
];

export const columns = [
    {
        label: 'Checkbox',
        attribute: 'name',
        valueView: CheckboxColumnView,
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
