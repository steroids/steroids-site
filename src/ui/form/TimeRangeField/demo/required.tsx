import * as React from 'react';
import TimeRangeField from '@steroidsjs/core/ui/form/TimeRangeField';

/**
 * Как обязательное поле для заполнения. * @order 1
 * @col 3
 */
export default () => (
    <>
        <TimeRangeField
            label='Required'
            required
        />
    </>
);
