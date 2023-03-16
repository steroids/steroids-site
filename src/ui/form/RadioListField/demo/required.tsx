import * as React from 'react';
import RadioListField from '@steroidsjs/core/ui/form/RadioListField/RadioListField';
import {items} from './basic';

/**
 * Как обязательное поле для заполнения.
 * @order 3
 * @col 6
 */

export default () => (
    <>
        <RadioListField
            label='Required'
            items={items}
            required
        />
    </>
);
