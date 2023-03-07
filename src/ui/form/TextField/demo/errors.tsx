import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 3
 */

export default () => (
    <>
        <TextField label='Errors' errors={['Error 1 text', 'Error 2 text']} layout className='TextFieldView_hasErrors' />
    </>
);
