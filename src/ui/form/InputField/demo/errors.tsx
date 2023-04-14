import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Обработка ошибок.
 * @order 5
 * @col 3
 */

export default () => (
    <>
        <InputField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
            className='InputFieldView_hasError'
        />
    </>
);
