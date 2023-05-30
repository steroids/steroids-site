import * as React from 'react';
import NavField from '@steroidsjs/core/ui/form/NavField';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Демонстрация всех видов использования свойства layout
 * @order 5
 * @col 12
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

const layouts = ['button', 'icon', 'link', 'tabs', 'navbar', 'list'];

export default () => (
    <div>
        {layouts.map(layout => (
            <div
                key={layout}
                style={{marginBottom: '24px'}}
            >
                <Text content={'Layout ' + layout} />
                <NavField
                    navProps={{layout}}
                    items={items}
                />
            </div>
        ))}
    </div>
);
