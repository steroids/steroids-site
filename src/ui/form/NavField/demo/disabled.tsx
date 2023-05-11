import * as React from 'react';
import NavField from '@steroidsjs/core/ui/form/NavField';
import {items} from './basic';

/**
 * Выключенный.
 * @order 2
 * @col 3
 */

export default () => (
    <>
        <NavField
            items={items}
            label='Disabled'
            disabled
        />
    </>
);
