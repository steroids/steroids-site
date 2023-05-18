/* eslint-disable max-len */
import * as React from 'react';

import MaskField from '@steroidsjs/core/ui/form/MaskField';

/**
 * С использованием маски для ввода номера телефона
 * @order 6
 * @col 3
 */

export default () => (
    <>
        <MaskField
            label="Mask phone"
            mask='+7 (999) 999-99-99'
            showClear
        />
        <MaskField
            label="Mask date"
            maskProps={{
                mask: '99.99.9999',
                maskPlaceholder: 'дд.мм.гггг',
            }}
            showClear
        />
        <MaskField
            label="Mask bank card"
            mask='9999 9999 9999 9999'
            showClear
        />
    </>
);
