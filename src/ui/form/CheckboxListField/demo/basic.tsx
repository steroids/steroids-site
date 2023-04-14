import * as React from 'react';
import CheckboxListField from '@steroidsjs/core/ui/form/CheckboxListField/CheckboxListField';

/**
 * Обычный пример использования списка из CheckboxListField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: 'item1',
    },
    {
        id: 2,
        label: 'item2',
    },
    {
        id: 3,
        label: 'item3',
    },
];

export default () => (
    <>
        <CheckboxListField
            items={items}
            orientation="horizontal"
            size='large'
        />
    </>
);
