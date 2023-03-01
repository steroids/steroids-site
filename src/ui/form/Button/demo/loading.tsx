import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * Использование кнопки при загрузке
 * @order 9
 * @col 4
 */

export default () => (
    <Button
        label='Loading'
        isLoading
        showLabelOnLoading={false}
    />
);
