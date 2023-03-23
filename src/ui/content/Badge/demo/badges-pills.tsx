import * as React from 'react';
import Badge from '@steroidsjs/core/ui/content/Badge';
import _upperFirst from 'lodash-es/upperFirst';

type colorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

const colors = {
    primary: {
        roundingStyle: 'squarer',
    },
    secondary: {
        roundingStyle: 'rounder',
    },
    success: {
        roundingStyle: 'squarer',
    },
    danger: {
        roundingStyle: 'rounder',
    },
    warning: {
        roundingStyle: 'squarer',
    },
    info: {
        roundingStyle: 'rounder',
    },
};

/**
 * Badge component with different sizes of text inside
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '30px'}}>
        {Object.entries(colors).map(([color, properties]) => (
            <div
                key={color}
                style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '10px'}}
            >
                {Object.entries(sizes).map(([size, label]) => (
                    <Badge
                        key={`${color}${size}`}
                        type={color as colorType}
                        size={size}
                        showClose
                        message={`${_upperFirst(color)} ${label}`}
                    />
                ))}
            </div>
        ))}
    </div>
);
