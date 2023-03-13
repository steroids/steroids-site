import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * С дополнительным текстом с рамками слева и справа от поля ввода.
 * @order 7
 * @col 3
 */
const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

export default () => (
    <div className='row'>
        {Object.keys(sizes).map(size => (
            <div className='col' key={size}>
                <InputField placeholder='Placeholder' addonBefore="https://" addonAfter=".com" showClear label={sizes[size]} size={size} layout />
            </div>
        ))}
    </div>
);
