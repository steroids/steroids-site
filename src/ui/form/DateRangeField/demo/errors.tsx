import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <DateRangeField
            label='Errors'
            className='DateRangeFieldView_is-invalid'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
