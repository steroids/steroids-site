import * as React from 'react';
import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 3
 */
export default () => (
    <>
        <InputField
            label='Required'
            required
            layout
        />
    </>
);
