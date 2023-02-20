import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * С вызовом Alert и текстом для подтверждения действий.
 * @order 6
 * @col 4
 */

export default () => (
    <>
        <Button confirm='Are you sure?'>
            Confirm
        </Button>
    </>
);
