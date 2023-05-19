import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

/**
 * По-умлочанию DateField имеет 3 заданных размера.
 * @order 7
 * @col 12
 */
export default () => (
    <>
        <div className='row mb-4'>
            {Object.entries(sizes).map(([size, label]) => (
                <div
                    className='col'
                    key={label}
                >
                    <DateRangeField
                        label={label}
                        size={size}
                    />
                </div>
            ))}
        </div>
    </>
);
