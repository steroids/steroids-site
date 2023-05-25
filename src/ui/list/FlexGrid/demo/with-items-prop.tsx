import * as React from 'react';
import FlexGrid from '@steroidsjs/core/ui/list/FlexGrid/FlexGrid';

const style = {
    height: '50px',
    backgroundColor: 'blue',
};

const items = [
    {
        content: <div style={style} />,
        col: 6,
    },
    {
        content: <div style={style} />,
        col: 4,
    },
    {
        content: <div style={style} />,
        col: 2,
    },
    {
        content: <div style={style} />,
        col: 6,
    },
    {
        content: <div style={style} />,
        col: 4,
    },
    {
        content: <div style={style} />,
        col: 2,
    },
];

/**
 * Basic
 */
export default () => (
    <div style={{maxWidth: '600px'}}>
        <FlexGrid
            items={items}
            wrap
            // gap={[10, 20]}
            gap={{
                lg: [30, 50],
                md: [10, 30],
                sm: [1, 5],
            }}
        />
    </div>
);
