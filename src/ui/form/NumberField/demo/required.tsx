import * as React from 'react';
import {NumberField} from '@steroidsjs/core/ui/form';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 3
 */

export default () => (
    <>
        <NumberField
            label='Required'
            required
        />
    </>
);
