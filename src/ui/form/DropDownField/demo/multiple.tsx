import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

import {items} from './basic';

/**
 * С возможность множественного выбора.
 * @order 6
 * @col 6
 */

export default () => (
    <>
        <DropDownField
            label='Multiple'
            multiple
            items={items}
        />
    </>
);
