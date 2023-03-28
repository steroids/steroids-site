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

/**
 * С возможность множественного выбора.
 * @order 6
 * @col 6
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}>
        <DropDownField
            label='Multiple with count'
            placeholder='Multiple with count'
            itemsContent={{
                type: 'checkbox',
            }}
            multiple
            items={items}
            layout
        />
        <DropDownField
            label='Multiple with ellipses'
            placeholder='Multiple with ellipses'
            itemsContent={{
                type: 'checkbox',
            }}
            multiple
            showReset
            showEllipses
            items={items}
            layout
        />
    </div>
);
