import * as React from 'react';
import NavField from '@steroidsjs/core/ui/form/NavField';

/**
 * Обычный пример использования
 * @order 1
 * @col 3
 */

export const items = [
    {
        id: 1,
        label: 'First',
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
];

export default () => (
    <>
        <NavField
            items={items}
            label='Basic'
        />
    </>
);
