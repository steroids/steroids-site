import * as React from 'react';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import DemoItems from 'enums/demoItems';

/**
 * Разные размеры кнопок
 * @order 9
 * @col 12
 */

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

export default () => (
    <div style={{display: 'flex', flexFlow: 'row wrap', gap: '30px'}}>
        {Object.entries(sizes).map(([size, label]) => (
            <div
                key={size}
            >
                <ButtonGroup
                    items={DemoItems}
                    onClick={() => {}}
                    buttonProps={{
                        size,
                    }}
                />
            </div>
        ))}
    </div>
);
