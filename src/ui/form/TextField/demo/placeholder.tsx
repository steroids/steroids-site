import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Сообщение пользователю для заполнения по контексту использования.
 * @order 5
 * @col 3
 */

export default () => (
    <>
        <TextField
            label='Placeholder'
            placeholder='Your password...'
            layout
        />
    </>
);
