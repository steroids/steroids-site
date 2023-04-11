import * as React from 'react';

import Link from '@steroidsjs/core/ui/nav/Link';

/**
 * Confirm
 * @order 7
 * @col 4
 */
export default () => (
    <>
        <Link
            confirm='Confirm text'
            label='Confirm'
            style={{display: 'inline-block', marginBottom: '1rem'}}
        />
    </>
);
