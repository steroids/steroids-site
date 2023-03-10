import * as React from 'react';
import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 3
 */

export default () => (
    <InputField label='Disabled' leadIcon="user" placeholder='Placeholder' disabled showClear />
);
