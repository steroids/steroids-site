import * as React from 'react';

import CheckboxListField from '@steroidsjs/core/ui/form/CheckboxListField/CheckboxListField';
import {items} from './basic';

/**
 * Обработка ошибок в списке.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <CheckboxListField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
            items={items}
            layout
        />
    </>
);
