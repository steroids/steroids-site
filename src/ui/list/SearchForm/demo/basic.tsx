import * as React from 'react';
import List from '@steroidsjs/core/ui/list/List';
import {InputField} from '@steroidsjs/core/ui/form';

/**
 * List with search form
 * @order 1
 * @col 6
 */

const items = [
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Petr',
    },
    {
        id: 3,
        name: 'Jhon',
    },
];

const searchForm = {
    fields: [
        {
            attribute: 'name',
            component: InputField,
        },
    ],
};

export default () => (
    <List
        listId='ListDemoSearch'
        items={items}
        searchForm={searchForm}
        className='list-group'
        itemView={(props: any) => (
            <div className='list-group-item'>
                <div>{props.item.name}</div>
            </div>
        )}
    />
);
