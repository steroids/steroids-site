import * as React from 'react';
import TimeRangeField from '@steroidsjs/core/ui/form/TimeRangeField';

/**
 * Выключенный TimeRangeField.
 * @order 1
 * @col 3
 */
export default () => (
    <>
        <TimeRangeField
            label='Disabled'
            disabled
        />
    </>
);
