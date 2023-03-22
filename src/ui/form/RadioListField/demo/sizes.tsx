import * as React from 'react';
import RadioListField from '@steroidsjs/core/ui/form/RadioListField/RadioListField';

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

/**
 * Размеры RadioListField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: 'Item',
    },
];

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}>
        {Object.entries(sizes).map(([size, label]) => (
            <RadioListField
                key={size}
                label={label}
                size={size}
                items={items}
            />
        ))}
    </div>
);
