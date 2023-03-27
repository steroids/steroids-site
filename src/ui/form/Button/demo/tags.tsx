import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * Пример выбора html-тэга, который будет использован в DOM
 * @order 11
 * @col 6
 */

export default () => (
    <div>
        <Button
            label={__('button')}
            tag='button'
            style={{marginBottom: '30px'}}
        />
        <Button
            label={__('a')}
            tag='a'
        />
    </div>
);
