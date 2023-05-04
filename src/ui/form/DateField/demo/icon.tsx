import * as React from 'react';
import DateField from '@steroidsjs/core/ui/form/DateField/DateField';

/**
 * С использованием кастомной иконкой.
 * @order 5
 * @col 6
 */

export default () => (
    <>
        <DateField
            label='Default'
            icon
        />
        <DateField
            label='With error'
            icon='user'
            errors={['Error 1 text']}
        />
        <DateField
            label='Custom'
            icon='map'
        />
    </>
);
