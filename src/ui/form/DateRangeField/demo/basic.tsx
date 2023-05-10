import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

/**
 * Обычный пример использования DateRangeField.
 * @order 1
 * @col 6
 */

export default () => (
    <>
        <DateRangeField
            label="Basic"
            attributeFrom='fromTime'
            attributeTo='toTime'
        />
    </>
);
