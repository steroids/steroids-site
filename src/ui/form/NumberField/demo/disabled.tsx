import * as React from 'react';

import {NumberField} from '@steroidsjs/core/ui/form';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 3
 */

export default () => (
    <>
        <NumberField
            label='Disabled'
            disabled
            value={3}
        />
    </>
);
