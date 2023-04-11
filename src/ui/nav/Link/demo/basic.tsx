import * as React from 'react';
import Link from '@steroidsjs/core/ui/nav/Link';

/**
 * Basic
 * @order 1
 * @col 4
 */
export default () => (
    <>
        <Link
            url='https://google.ru'
            target='_blank'
            label={__('Basic')}
            style={{display: 'inline-block', marginBottom: '1rem'}}
        />
    </>
);
