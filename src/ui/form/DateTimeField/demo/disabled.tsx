import * as React from 'react';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <div>
            <DateTimeField
                label='Disabled'
                disabled
            />
        </div>
    </>
);
