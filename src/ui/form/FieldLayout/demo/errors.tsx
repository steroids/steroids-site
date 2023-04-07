import * as React from 'react';
import {FieldLayout, InputField} from '@steroidsjs/core/ui/form';

/**
 * Обработка ошибок.
 * @order 3
 * @col 6
 */

export default () => (
    <FieldLayout
        label='Error'
        errors={['The field is filled incorrectly']}
    >
        <InputField label='label' />
    </FieldLayout>
);
