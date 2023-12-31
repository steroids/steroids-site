import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Подсказка для успешного и ошибочного состояния
 * @order 1
 * @col 3
 */

export default () => (
    <>
        <TextField
            label='Success'
            successful
            hint='Successful message'
            size='md'
        />
        <TextField
            label='Errors'
            errors={['Error message']}
            className="TextFieldView_hasErrors"
            hint='Error message'
            size='md'
        />
    </>
);
