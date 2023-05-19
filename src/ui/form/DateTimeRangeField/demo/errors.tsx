import * as React from 'react';
import DateTimeRangeField from '@steroidsjs/core/ui/form/DateTimeRangeField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <DateTimeRangeField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
