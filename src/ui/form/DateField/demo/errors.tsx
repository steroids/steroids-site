import * as React from 'react';
import DateField from '@steroidsjs/core/ui/form/DateField/DateField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <DateField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
