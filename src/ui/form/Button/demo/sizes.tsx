import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * По умолчанию Button имеет 3 заданных размера.
 * @order 10
 * @col 8
 */

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

export default () => (
    <>
        {Object.keys(sizes).map(size => (
            <Button
                key={size}
                size={size}
                className='float-left mr-2'
            >
                {sizes[size]}
            </Button>
        ))}
    </>
);
