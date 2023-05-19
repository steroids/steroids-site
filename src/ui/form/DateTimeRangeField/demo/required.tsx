import * as React from 'react';
import DateTimeRangeField from '@steroidsjs/core/ui/form/DateTimeRangeField';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 6
 */

export default () => (
    <>
        <DateTimeRangeField
            label='Required'
            required
        />
    </>
);
