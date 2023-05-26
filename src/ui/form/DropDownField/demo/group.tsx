import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

/**
 * Обычный пример использования DropDownField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: 'First',
        items: [
            {
                id: 32,
                label: 'Inner Item 1',
            },
            {
                id: 44,
                label: 'Inner Item 2',
            },
            {
                id: 55,
                label: 'Inner Item 3',
            },
            {
                id: 66,
                label: 'Inner Item 4',
            },
        ],
    },
    {
        id: 2,
        label: 'Second',
    },
    {
        id: 4,
        label: 'Fourth',
        items: [
            {
                id: 321,
                label: 'Inner Item 5',
            },
            {
                id: 543543,
                label: 'Inner Item 6',
            },
            {
                id: 543,
                label: 'Inner Item 7',
            },
            {
                id: 736,
                label: 'Inner Item 8',
            },
        ],
    },
];

export default () => (
    <>
        <DropDownField
            label='Group'
            placeholder='Group'
            multiple
            itemToSelectAll={
                {
                    label: 'All',
                    id: 'all',
                }
            }
            showReset
            itemsContent={{
                type: 'checkbox',
            }}
            groupAttribute='items'
            items={items}
        />
    </>
);
