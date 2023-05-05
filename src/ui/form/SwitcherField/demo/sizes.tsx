import * as React from 'react';
import SwitcherField from '@steroidsjs/core/ui/form/SwitcherField';

/**
 * Размеры SwitcherField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: 'First',
    },
];

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

export default () => (
    <>
        {Object.entries(sizes).map(([size, label], switcherIndex) => (
            <SwitcherField
                key={switcherIndex}
                label={label}
                multiple
                size={size}
                items={items}
            />
        ))}
    </>
);
