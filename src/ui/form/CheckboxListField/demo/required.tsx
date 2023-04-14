import * as React from 'react';
import CheckboxListField from '@steroidsjs/core/ui/form/CheckboxListField/CheckboxListField';
import {items} from './basic';

/**
 * Список как обязательный для заполнения.
 * @order 3
 * @col 6
 */
export default () => (
    <>
        <CheckboxListField
            label='Required'
            items={items}
            required
        />
    </>
);
