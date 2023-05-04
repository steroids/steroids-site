import * as React from 'react';

import Link from '@steroidsjs/core/ui/nav/Link';

/**
 * Link with icon
 * @order 6
 * @col 4
 */
export default () => (
    <>
        <Link
            label={__('Icon')}
            icon='home'
            url='https://google.ru'
            target='_blank'
        />
    </>
);
