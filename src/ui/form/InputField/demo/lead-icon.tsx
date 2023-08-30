/* eslint-disable max-len */
import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * С использованием маски для ввода номера телефона
 * @order 6
 * @col 3
 */

const circle = (
    <svg
        height="24"
        width="24"
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="#000"
        />
    </svg>
);
export default () => (
    <div style={{display: 'flex', flexFlow: 'row wrap', columnGap: '30px'}}>
        <InputField
            label="Custom lead icon"
            showClear
            leadIcon={circle}
        />
        <InputField
            label="Steroids lead icon"
            showClear
            leadIcon='user'
        />
    </div>
);
