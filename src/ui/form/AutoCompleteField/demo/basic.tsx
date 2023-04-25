import * as React from 'react';
import AutoCompleteField from '@steroidsjs/core/ui/form/AutoCompleteField';

/**
 * Простой пример использзования AutoAutoCompleteField с коллекцией элементов вложенных в {props.items} .
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: '1',
        label: 'Perm',
    },
    {
        id: '2',
        label: 'Achinsk',
    },
    {
        id: '3',
        label: 'Bratsk',
    },
    {
        id: '4',
        label: 'Sochi',
    },
    {
        id: '5',
        label: 'Moscow',
    },
    {
        id: '6',
        label: 'Novgorod',
    },
    {
        id: '7',
        label: 'Irkutsk',
    },
    {
        id: '8',
        label: 'Yakutsk',
    },
    {
        id: '9',
        label: 'Saint-Petersburg',
    },
];

export default () => (
    <>
        <AutoCompleteField
            label='Write city'
            items={items}
            searchOnFocus
        />
    </>
);
