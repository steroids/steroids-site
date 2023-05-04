import * as React from 'react';
import AutoCompleteField from '@steroidsjs/core/ui/form/AutoCompleteField';
import {items} from './basic';

/**
 * Сообщение внутри AutoCompleteField по контексту использования.
 * @order 5
 * @col 6
 */
export default () => (
    <>
        <AutoCompleteField
            label='Placeholder'
            placeholder='Your text...'
            items={items}
        />
    </>
);
