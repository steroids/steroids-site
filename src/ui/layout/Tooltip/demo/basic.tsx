import * as React from 'react';
import {Button} from '@steroidsjs/core/ui/form';
import Tooltip from '@steroidsjs/core/ui/layout/Tooltip';

/**
 * Обычное использование Tooltip c 4-мя разными позициями и по-умолчанию включена видимость.
 * @order 1
 * @col 6
 */

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
            <Tooltip
                defaultVisible
                position='topLeft'
                content='topLeft'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>

            <Tooltip
                defaultVisible
                position='top'
                content='top'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>

            <Tooltip
                defaultVisible
                position='topRight'
                content='topRight'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>
        </div>

        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gridGap: '30px',
                padding: '30px',
            }}
        >
            <Tooltip
                defaultVisible
                position='bottomLeft'
                content='bottomLeft'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>

            <Tooltip
                defaultVisible
                position='bottom'
                content='bottom'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>

            <Tooltip
                defaultVisible
                position='bottomRight'
                content='bottomRight'
            >
                <div style={{width: 'fit-content'}}>
                    <Button label='Show Tooltip' />
                </div>
            </Tooltip>
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
                <Tooltip
                    defaultVisible
                    position='leftTop'
                    content='leftTop'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>

                <Tooltip
                    defaultVisible
                    position='left'
                    content='left'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>

                <Tooltip
                    defaultVisible
                    position='leftBottom'
                    content='leftBottom'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    gridGap: '50px',
                    padding: '30px',
                }}
            >
                <Tooltip
                    defaultVisible
                    position='rightTop'
                    content='rightTop'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>

                <Tooltip
                    defaultVisible
                    position='right'
                    content='right'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>

                <Tooltip
                    defaultVisible
                    position='rightBottom'
                    content='rightBottom'
                >
                    <div style={{width: 'fit-content'}}>
                        <Button label='Show Tooltip' />
                    </div>
                </Tooltip>
            </div>
        </div>
    </>
);
