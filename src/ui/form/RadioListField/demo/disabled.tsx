import * as React from 'react';
import RadioListField from '@steroidsjs/core/ui/form/RadioListField/RadioListField';
import {items} from './basic';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <RadioListField
            label='Disabled'
            selectedIds={[3]}
            disabled
            items={items}
        />
    </>
);
