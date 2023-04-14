import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 3
 */
export default () => (
    <>
        <TextField
            label='Disabled'
            placeholder='Disabled'
            disabled
            showClose
        />
    </>
);
