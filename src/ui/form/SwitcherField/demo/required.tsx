import * as React from 'react';
import SwitcherField from '@steroidsjs/core/ui/form/SwitcherField';
import {items} from './basic';

/**
 * Как обязательное для заполнения.
 * @order 3
 * @col 6
 */

export default () => (
    <>
        <SwitcherField
            label='Required'
            items={items}
            required
        />
    </>
);
