import * as React from 'react';
import {CheckboxField} from '@steroidsjs/core/ui/form';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 4
 */

export default () => (
    <>
        <CheckboxField label='Required' required />
    </>
);
