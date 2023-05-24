import * as React from 'react';
import TimeField from '@steroidsjs/core/ui/form/TimeField';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 3
 */

export default () => (
    <>
        <TimeField
            label='Required'
            required
        />
    </>
);
