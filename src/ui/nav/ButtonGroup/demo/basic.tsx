import * as React from 'react';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import DemoItems from 'enums/demoItems';

/**
 * Обычное использование ButtonGroup
 * @order 1
 * @col 6
 */

export default () => (
    <>
        <div style={{marginBottom: '20px'}}>
            <ButtonGroup
                items={DemoItems}
                onClick={() => {}}
            />
        </div>
        <ButtonGroup
            items={DemoItems}
            onClick={() => {}}
            buttonProps={{
                outline: true,
            }}
        />
    </>
);
