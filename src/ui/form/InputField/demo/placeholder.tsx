import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Сообщение пользователю для заполнения по контексту использования.
 * @order 4
 * @col 3
 */

export default () => (
    <>
        <InputField
            label='Placeholder'
            layout
            placeholder='Your text...'
        />
    </>
);
