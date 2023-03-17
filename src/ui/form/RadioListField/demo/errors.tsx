import * as React from 'react';
import RadioListField from '@steroidsjs/core/ui/form/RadioListField/RadioListField';
import {items} from './basic';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <RadioListField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
            items={items}
            className='RadioListFieldView__item_hasError'
            layout
        />
    </>
);
