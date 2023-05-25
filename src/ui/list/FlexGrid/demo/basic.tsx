import * as React from 'react';
import FlexGrid from '@steroidsjs/core/ui/list/FlexGrid/FlexGrid';

const style = {
    width: '100px',
    height: '50px',
    backgroundColor: 'blue',
};

/**
 * Basic
 */
export default () => (
    <div style={{maxWidth: '600px'}}>
        <FlexGrid
            justify='center'
            gap='50px'
            direction='column'
            align='center'
        >
            <div style={style} />
            <div style={style} />
            <div style={style} />
        </FlexGrid>
    </div>
);
