import * as React from 'react';
import {PasswordField} from '@steroidsjs/core/ui/form';

/**
 * Обработка ошибок.
 * @order 6
 * @col 4
 */

export default () => (
    <>
        <PasswordField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
