import * as React from 'react';
import TimeRangeField from '@steroidsjs/core/ui/form/TimeRangeField';
/**
 * Обработка ошибок.
 * @order 4
 * @col 3
 */

export default () => (
    <>
        <TimeRangeField
            label='Errors'
            className="TimeRangeFieldView_is-invalid"
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
