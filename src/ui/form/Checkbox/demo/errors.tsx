import * as React from 'react';
import {CheckboxField, Form} from '@steroidsjs/core/ui/form';

/**
 * Обработка ошибок.
 * @order 4
 * @col 4
 */

export default () => (
    <CheckboxField
        label='Errors'
        errors={['Error 1 text', 'Error 2 text']}
        className='has-errors'
    />
);
