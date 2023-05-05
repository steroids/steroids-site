import * as React from 'react';
import SwitcherField from '@steroidsjs/core/ui/form/SwitcherField';

/**
 * Демонстрация различных label в зависимости от состояния SwitcherField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: {
            checked: 'On',
            unchecked: 'Off',
        },
    },
];

export default () => (
    <>
        <SwitcherField
            label="Toggle on / off label"
            multiple
            items={items}
        />
    </>
);
