import * as React from 'react';
import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * По-умлочанию InputField имеет 3 заданных размера поля.
 * @order 9
 * @col 12
 */

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

export default () => (
    <div style={{display: 'flex', flexFlow: 'row wrap', columnGap: '30px'}}>
        {Object.entries(sizes).map(([size, label]) => (
            <div
                className='col'
                key={size}
            >
                <InputField
                    placeholder='Placeholder'
                    leadIcon='user'
                    showClear
                    label={label}
                    size={size}
                />
            </div>
        ))}
    </div>
);
