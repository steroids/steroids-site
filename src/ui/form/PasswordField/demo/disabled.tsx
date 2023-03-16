import * as React from 'react';
import {PasswordField} from '@steroidsjs/core/ui/form';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 3
 */

export default () => (
    <>
        <PasswordField
            label='Disabled'
            disabled
            placeholder='Password'
            security
            showClear
        />
    </>
);
