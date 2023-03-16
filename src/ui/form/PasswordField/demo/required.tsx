import * as React from 'react';
import {PasswordField} from '@steroidsjs/core/ui/form';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 3
 */

export default () => (
    <>
        <PasswordField label='Required' required />
    </>
);
