import * as React from 'react';
import {CheckboxField} from '@steroidsjs/core/ui/form';

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

/**
 * Обычный пример использования CheckboxField.
 * @order 1
 * @col 4
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '20px'}}>
        {Object.entries(sizes).map(([size, label]) => (
            <CheckboxField
                key={size}
                label={label}
                size={size}
            />
        ))}

    </div>
);
