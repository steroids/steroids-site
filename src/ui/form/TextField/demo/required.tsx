import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Как обязательное для заполнения.
 * @order 3
 * @col 3
 */

export default () => (
    <>
        <TextField label='Required' required layout />
    </>
);
