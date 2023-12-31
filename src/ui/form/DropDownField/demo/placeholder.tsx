import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

import {items} from './basic';

/**
 * С полем для поиска выбора из выпадающего списка.
 * @order 8
 * @col 6
 */

export default () => (
    <>
        <DropDownField
            label='Search Placeholder'
            autoComplete
            placeholder='Placeholder'
            searchPlaceholder='Search...'
            items={items}
        />
    </>
);
