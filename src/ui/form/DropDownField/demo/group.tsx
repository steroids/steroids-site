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
        id: 3,
        label: 'Third',
    },
    {
        id: 4,
        label: 'Fourth',
    },
    {
        id: 5,
        label: 'Fifth',
    },
    {
        id: 6,
        label: 'Sixth',
    },
    {
        id: 7,
        label: 'Seventh',
    },
    {
        id: 8,
        label: 'Eighth',
    },
    {
        id: 9,
        label: 'Ninth',
    },
];

export default () => (
    <>
        <DropDownField
            label='Basic'
            layout
            placeholder='Basic'
            multiple
            showReset
            itemsContent={{
                type: 'checkbox',
            }}
            groupAttribute='items'
            items={items}
        />
    </>
);
