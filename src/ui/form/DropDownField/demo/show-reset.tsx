import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

import {items} from './basic';

/**
 * С кнопкой для удаления выбора.
 * @order 9
 * @col 6
 */

export default () => (
    <>
        <DropDownField
            label='Show reset'
            showReset
            items={items}
        />
    </>
);
