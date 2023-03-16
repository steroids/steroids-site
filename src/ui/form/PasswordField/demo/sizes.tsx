import * as React from 'react';
import {PasswordField} from '@steroidsjs/core/ui/form';

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

/**
 * По-умлочанию PasswordField имеет 3 заданных размера поля.
 * @order 5
 * @col 12
 */

export default () => (
    <div className='row'>
        {Object.keys(sizes).map(size => (
            <div
                className='col'
                key={size}
            >
                <PasswordField
                    label={sizes[size]}
                    placeholder={sizes[size]}
                    size={size}
                    layout
                    showSecurityBar
                />
            </div>
        ))}
    </div>
);
