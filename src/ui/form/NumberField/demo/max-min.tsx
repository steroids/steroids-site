import * as React from 'react';

import {NumberField} from '@steroidsjs/core/ui/form';

/**
 * С ограниченными значениями.
 * @order 1
 * @col 3
 */

export default () => (
    <>
        <NumberField
            label='Amount'
            min={0}
            max={3}
        />
    </>
);
