import * as React from 'react';
import AutoCompleteField from '@steroidsjs/core/ui/form/AutoCompleteField';

export const items = [
    {
        id: '1',
        label: 'Ust-kut',
        category: 'Irkutskaya oblast',
    },
    {
        id: '2',
        label: 'Irkutsk',
        category: 'Irkutskaya oblast',
    },
    {
        id: '3',
        label: 'Bratsk',
        category: 'Irkutskaya oblast',
    },
    {
        id: '4',
        label: 'Yakutsk',
        category: 'Sakha republic',
    },
    {
        id: '5',
        label: 'Neryungri',
        category: 'Sakha republic',
    },
    {
        id: '6',
        label: 'Aldan',
        category: 'Sakha republic',
    },
    {
        id: '7',
        label: 'Moscow',
        category: 'Moscow oblast',
    },
    {
        id: '8',
        label: 'Himki',
        category: 'Moscow oblast',
    },
    {
        id: '9',
        label: 'Korolev',
        category: 'Moscow oblast',
    },
];

/**
 * Категории AutoCompleteField
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <AutoCompleteField
            label='Categories'
            items={items}
        />
    </>
);
