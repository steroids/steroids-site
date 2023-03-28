import * as React from 'react';
import {Button} from '@steroidsjs/core/ui/form';
import Tooltip from '@steroidsjs/core/ui/layout/Tooltip';

/**
 * Обычное использование Tooltip c 4-мя разными позициями и по-умолчанию включена видимость.
 * @order 1
 * @col 6
 */
const examples = {
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
    column1: [
        'leftTop',
        'left',
        'leftBottom',
    ],
    column2: [
        'rightTop',
        'right',
        'rightBottom',
    ],
};

export default () => (
    <>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gridGap: '30px',
                padding: '30px',
            }}
        >
            {examples.row1.map((position, index) => (
                <Tooltip
                    key={index}
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

        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gridGap: '30px',
                padding: '30px',
            }}
        >
            {examples.row2.map((position, index) => (
                <Tooltip
                    key={index}
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

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30px',
        }}
        >
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    gridGap: '50px',
                    padding: '30px',
                }}
            >
                {examples.column1.map((position, index) => (
                    <Tooltip
                        key={index}
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
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    gridGap: '50px',
                    padding: '30px',
                }}
            >
                {examples.column2.map((position, index) => (
                    <Tooltip
                        key={index}
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
        </div>
    </>
);
