import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import InputField from '@steroidsjs/core/ui/form/InputField/InputField';
import {items, columns} from './basic';

export const searchForm = {
    layout: 'table',
    fields: [
        {
            label: 'Name',
            attribute: 'name',
            component: InputField,
        },
        {
            label: 'Second name',
            attribute: 'secondName',
            component: InputField,
        },
        {
            label: 'Work',
            attribute: 'work',
            component: InputField,
        },
    ],
};

/**
 * Grid with inner search form
 * @order 5
 * @col 8
 */
export default () => (
    <>
        <Grid
            listId='GridInnerSearchFormDemo'
            items={items}
            columns={columns}
            searchForm={searchForm}
        />
    </>
);
