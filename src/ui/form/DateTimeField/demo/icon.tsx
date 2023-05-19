import * as React from 'react';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';

/**
 * Справа в инпуте кастомная иконка
 * @order 5
 * @col 6
 */
export default () => (
    <>
        <DateTimeField
            label='Custom icon'
            icon='user'
            dateProps={{
                icon: true,
            }}
        />
    </>
);
