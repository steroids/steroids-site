import * as React from 'react';

import Button from '@steroidsjs/core/ui/form/Button/Button';

const colors = {
    basic: 'Basic',
    primary: 'Primary',
    secondary: 'Secondary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    info: 'Info',
};

/**
 * По умолчанию кнопка имеет 8 видов цветов и так же режим outline к каждому из цветов.
 * @order 5
 * @col 12
 */

export default () => (
    <>
        <div style={{display: 'flex', gridGap: '10px', marginBottom: '10px'}}>
            {Object.keys(colors).map(color => (
                <Button
                    key={color}
                    color={color}
                    label={colors[color]}
                />
            ))}
        </div>
        <div style={{display: 'flex', gridGap: '10px'}}>
            {Object.keys(colors).map(color => (
                <Button
                    key={color}
                    color={color}
                    label={colors[color]}
                    outline
                />
            ))}
        </div>
    </>
);
