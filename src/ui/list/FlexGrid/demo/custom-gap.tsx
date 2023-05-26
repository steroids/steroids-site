import * as React from 'react';
import FlexGrid from '@steroidsjs/core/ui/list/FlexGrid/FlexGrid';

const style = {
    width: '200px',
    height: '50px',
    backgroundColor: '#651fff',
};

/**
 * Basic
 */
export default () => (
    <div style={{maxWidth: '620px'}}>
        <FlexGrid
            gap={[10, 20]}
            wrap
        >
            <div style={style} />
            <div style={style} />
            <div style={style} />
            <div style={style} />
            <div style={style} />
            <div style={style} />
        </FlexGrid>
    </div>
);
