import * as React from 'react';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <DateTimeField
            label='Errors'
            className='DateTimeFieldView_is-invalid'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
