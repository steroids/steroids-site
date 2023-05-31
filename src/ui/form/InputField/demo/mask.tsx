/* eslint-disable max-len */
import * as React from 'react';
import InputField, {MASK_PRESETS} from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * С использованием маски для ввода номера телефона
 * @order 6
 * @col 3
 */

export default () => (
    <>
        <InputField
            label="Mask"
            maskOptions={MASK_PRESETS.phone}
            showClear
        />
    </>
);
