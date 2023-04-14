import * as React from 'react';
import {FieldLayout, InputField} from '@steroidsjs/core/ui/form';

/**
 * Как обязательное поле для заполнения.
 * @order 2
 * @col 6
 */

export default () => (
    <FieldLayout
        required
        label='Required'
        size='md'
    >
        <InputField />
    </FieldLayout>
);
