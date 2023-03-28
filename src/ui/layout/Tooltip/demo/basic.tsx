import * as React from 'react';
import {Button} from '@steroidsjs/core/ui/form';
import Tooltip from '@steroidsjs/core/ui/layout/Tooltip';

/**
 * Обычное использование Tooltip c 4-мя разными позициями и по-умолчанию включена видимость.
 * @order 1
 * @col 6
 */

const examplesRows = {
    row1: {
        topLeft: 'topLeft',
        top: 'top',
        topRight: 'topRight',
    },
    row2: {
        bottomLeft: 'bottomLeft',
        bottom: 'bottom',
        bottomRight: 'bottomRight',
    },
};

const examplesColumns = {
    column1: {
        leftTop: 'leftTop',
        left: 'left',
        leftBottom: 'leftBottom',
    },
    column2: {
        rightTop: 'rightTop',
        right: 'right',
        rightBottom: 'rightBottom',
    },
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
                    padding: '30px',
                }}
            >
                {Object.entries(positions).map(([position]) => (
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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30px',
        }}
        >
            {Object.entries(examplesColumns).map(([examplesColumn, positions]) => (
                <div
                    key={examplesColumn}
                    style={{
                        display: 'flex',
                        flexFlow: 'column',
                        gridGap: '50px',
                        padding: '30px',
                    }}
                >
                    {Object.entries(positions).map(([position]) => (
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
