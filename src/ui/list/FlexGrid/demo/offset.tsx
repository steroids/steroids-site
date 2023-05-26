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
        content: <div style={style}>col-6, offset-6</div>,
        col: 6,
        offset: 6,
    },
    {
        content: <div style={style}>col-8, offset-4</div>,
        col: 8,
        offset: 4,
    },
    {
        content: <div style={style}>col-10, offset-2</div>,
        col: 10,
        offset: 2,
    },
];

/**
 * Basic
 */
export default () => (
    <div style={{width: '620px'}}>
        <FlexGrid
            items={items}
            wrap
            gap={10}
        />
    </div>
);
