import * as React from 'react';
import Button from '@steroidsjs/core/ui/form/Button/Button';

/**
 * Кнопка с бэйджом к примеру с количеством уведомлений.
 * @order 3
 * @col 4
 */

export default () => (
    <Button
        badge={2}
        label={__('Badge')}
    />
);
