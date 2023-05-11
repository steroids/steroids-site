import * as React from 'react';
import NavField from '@steroidsjs/core/ui/form/NavField';
import {items} from './basic';

/**
 * Обязательный для заполнения.
 * @order 3
 * @col 3
 */

export default () => (
    <>
        <NavField
            items={items}
            label='Required'
            required
        />
    </>
);
