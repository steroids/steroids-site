import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * Использвание кнопки в качестве ссылки.
 * @order 9
 * @col 4
 */

export default () => (
    <>
        <Button
            link
            url='https://google.ru'
            target='_blank'
            label={__('Link')}
        />
    </>
);
