import * as React from 'react';
import {Button} from '@steroidsjs/core/ui/form';
import Tooltip from '@steroidsjs/core/ui/layout/Tooltip';

/**
 * @order 1
 * @col 6
 */

const examplesRows = {
    row1: [
        'topLeft',
        'top',
        'topRight',
    ],
    row2: [
        'bottomLeft',
        'bottom',
        'bottomRight',
    ],
};

export default () => (
    <>
        {Object.entries(examplesRows).map(([examplesRow, positions]) => (
            <div
                key={examplesRow}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gridGap: '30px',
                    padding: '0px 30px 60px 30px',
                }}
            >
                {positions.map((position) => (
                    <Tooltip
                        key={position}
                        defaultVisible
                        position={position}
                        content={position}
                    >
                        <div style={{width: 'fit-content'}}>
                            <Button label='Show Tooltip' />
                        </div>
                    </Tooltip>
                ))}
            </div>
        ))}
    </>
);
