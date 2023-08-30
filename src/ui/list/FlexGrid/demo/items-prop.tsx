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
        content: <div style={style}>col-12</div>,
        col: 12,
    },
    {
        content: <div style={style}>col-6</div>,
        col: 6,
    },
    {
        content: <div style={style}>col-6</div>,
        col: 6,
    },
    {
        content: <div style={style}>col-4</div>,
        col: 4,
    },
    {
        content: <div style={style}>col-4</div>,
        col: 4,
    },
    {
        content: <div style={style}>col-4</div>,
        col: 4,
    },
    {
        content: <div style={style}>col-3</div>,
        col: 3,
    },
    {
        content: <div style={style}>col-3</div>,
        col: 3,
    },
    {
        content: <div style={style}>col-3</div>,
        col: 3,
    },
    {
        content: <div style={style}>col-3</div>,
        col: 3,
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
