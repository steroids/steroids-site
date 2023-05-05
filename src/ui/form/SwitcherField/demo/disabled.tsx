import * as React from 'react';
import SwitcherField from '@steroidsjs/core/ui/form/SwitcherField';
import {items} from './basic';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <SwitcherField
            label='Disabled'
            items={items}
            disabled
        />
    </>
);
