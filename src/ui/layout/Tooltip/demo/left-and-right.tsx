import * as React from 'react';
import {Button} from '@steroidsjs/core/ui/form';
import Tooltip from '@steroidsjs/core/ui/layout/Tooltip';

/**
 * @order 1
 * @col 6
 */

const examplesColumns = {
    column1: [
        'leftTop',
        'left',
        'leftBottom',
    ],
    column2: [
        'rightTop',
        'right',
        'rightBottom'],
};

export default () => (
    <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '0px 70px',
        }}
        >
            {Object.entries(examplesColumns).map(([examplesColumn, positions]) => (
                <div
                    key={examplesColumn}
                    style={{
                        display: 'flex',
                        flexFlow: 'column wrap',
                        gridGap: '60px',
                        padding: '0px 30px',
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
        </div>
    </>
);
