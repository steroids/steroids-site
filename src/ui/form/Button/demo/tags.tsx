import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * Пример выбора html-тэга, который будет использован в DOM
 * @order 11
 * @col 6
 */

export default () => (
    <>
        <Button
            label={__('button')}
            tag='button'
        />
        <Button
            label={__('a')}
            tag='a'
        />
    </>
);
