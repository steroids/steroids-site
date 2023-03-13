import React from 'react';
import {DropDown} from '@steroidsjs/core/ui/content';

import './All.scss';

const Examples = {
    row1: {
        topLeft: 'Popover Top Left',
        top: 'Popover Top Center',
        topRight: 'Popover Top Right',
    },
    row2: {
        bottomLeft: 'Popover Bottom Left',
        bottom: 'Popover Bottom Center',
        bottomRight: 'Popover Bottom Right',
    },
    row3: {
        leftTop: 'Popover Left Top',
        left: 'Popover Left Center',
        leftBottom: 'Popover Left Bottom',
    },
    row4: {
        rightTop: 'Popover Right Top',
        right: 'Popover Right Center',
        rightBottom: 'Popover Right Bottom',
    },

};

const Content = () => (
    <div>
        <p>Test data</p>
        <p>Test data</p>
        <p>Test data</p>
    </div>
);

export default () => (
    <div style={{display: 'flex', rowGap: '10px', flexDirection: 'column'}}>
        {Object.keys(Examples).map(key => (
            <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
                {Object.keys(Examples[key]).map(position => (
                    <DropDown
                        content={() => <Content />}
                        closeMode='click-away'
                        position={position}
                    >
                        <span className='example'>
                            {Examples[key][position]}
                        </span>
                    </DropDown>
                ))}
            </div>
        ))}
    </div>
);
