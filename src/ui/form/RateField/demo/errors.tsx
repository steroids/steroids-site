import * as React from 'react';
import RateField from '@steroidsjs/core/ui/form/RateField';

/**
 * Обработка ошибок.
 * @order 4
 * @col 6
 */

export default () => (
    <>
        <RateField
            errors={['Error 1 text', 'Error 2 text']}
        />
    </>
);
