import * as React from 'react';
import RateField from '@steroidsjs/core/ui/form/RateField';

const sizes = [
    'sm',
    'md',
    'lg',
];

/**
 * Размеры RateField.
 * @order 1
 * @col 6
 */

export default () => (
    <div>
        {sizes.map((size, index) => (
            <RateField
                size={size}
                key={index}
                badge={{
                    title: 'Rate',
                }}
            />
        ))}
    </div>
);
