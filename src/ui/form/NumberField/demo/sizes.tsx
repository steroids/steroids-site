import * as React from 'react';

import {NumberField} from '@steroidsjs/core/ui/form';

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

/**
 * По-умлочанию NumberField имеет 3 заданных размера поля.
 * @order 5
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}>
        {Object.entries(sizes).map(([size, label]) => (
            <div
                className='col'
                key={size}
            >
                <NumberField
                    placeholder='Your number'
                    label={label}
                    size={size}
                />
            </div>
        ))}
    </div>
);
