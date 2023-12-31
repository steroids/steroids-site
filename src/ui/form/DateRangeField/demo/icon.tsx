import * as React from 'react';
import DateRangeField from '@steroidsjs/core/ui/form/DateRangeField';

/**
 * С использованием кастомной иконкой.
 * @order 5
 * @col 6
 */

export default () => (
    <>
        <DateRangeField
            label='Default'
            icon
        />
        <DateRangeField
            label='With error'
            icon='user'
            className='DateRangeFieldView_is-invalid'
            errors={['Error 1 text']}
        />
        <DateRangeField
            label='Custom'
            icon='map'
        />
    </>
);
