import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

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
];

/**
 * С возможностью очистить выбранные пункты
 * @order 6
 * @col 6
 */

export default () => (
    <DropDownField
        label='With reset button'
        placeholder='Select'
        itemsContent={{
            type: 'checkbox',
        }}
        showReset
        multiple
        items={items}
        layout
    />
);
