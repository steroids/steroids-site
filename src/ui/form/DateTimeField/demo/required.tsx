import * as React from 'react';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 6
 */

export default () => (
    <>
        <DateTimeField
            label='Required'
            required
        />
    </>
);
