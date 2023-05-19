import * as React from 'react';
import DateTimeRangeField from '@steroidsjs/core/ui/form/DateTimeRangeField';

/**
 * Сообщение внутри импута
 * @order 6
 * @col 6
 */

export default () => (
    <>
        <DateTimeRangeField
            label='Placeholder'
            placeholder='Your date...'
        />
    </>
);
