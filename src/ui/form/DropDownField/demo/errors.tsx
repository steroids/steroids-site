import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

import {items} from './basic';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <DropDownField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
            layout
            items={items}
        />
    </>
);
