import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <DateRangeField
            label='Disabled'
            disabled
        />
    </>
);
