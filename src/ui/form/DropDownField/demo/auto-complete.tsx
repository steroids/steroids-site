import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';
import {items} from './basic';

/**
 * Использование свойства самозаполнения.
 * @order 5
 * @col 6
 */

export default () => (
    <>
        <DropDownField
            label='Auto Complete'
            autoComplete
            searchPlaceholder='Search'
            placeholder='Auto Complete'
            items={items}
        />
    </>
);
