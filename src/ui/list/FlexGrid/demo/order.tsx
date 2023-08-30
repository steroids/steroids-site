import * as React from 'react';
import FlexGrid from '@steroidsjs/core/ui/list/FlexGrid/FlexGrid';

const style = {
    height: '50px',
    backgroundColor: '#651fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
};

const items = [
    {
        content: <div style={style}>col-12, order-2</div>,
        col: 12,
        order: 2,
    },
    {
        content: <div style={style}>col-6, order-1</div>,
        col: 6,
        order: 1,
    },
    {
        content: <div style={style}>col-6, order-3</div>,
        col: 6,
        order: 3,
    },
];

/**
 * Basic
 */
export default () => (
    <div style={{maxWidth: '620px'}}>
        <FlexGrid
            items={items}
            wrap
            gap={10}
        />
    </div>
);
