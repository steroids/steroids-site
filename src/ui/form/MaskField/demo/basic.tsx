/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import * as React from 'react';
import MaskField from '@steroidsjs/core/ui/form/MaskField';
import {MASK_PRESETS} from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * С использованием маски для ввода номера телефона
 * @order 6
 * @col 3
 */

export default () => (
    <>
        <MaskField
            label="Mask phone"
            maskOptions={MASK_PRESETS.phone}
            showClear
        />
        <MaskField
            label="Mask date"
            maskOptions={MASK_PRESETS.date}
            showClear
        />
        <MaskField
            label="Mask bank card"
            maskOptions={MASK_PRESETS.card}
            showClear
        />
    </>
);
