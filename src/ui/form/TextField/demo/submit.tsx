import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * Чтобы подтвердить используется нажатие клавиши Enter
 * @order 6
 * @col 3
 */

export default () => (
    <>
        <TextField label='Submit On Enter' submitOnEnter layout />
    </>
);
