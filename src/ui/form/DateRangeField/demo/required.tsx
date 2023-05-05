import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 6
 */

export default () => (
    <>
        <DateRangeField
            label='Required'
            required
        />
    </>
);
