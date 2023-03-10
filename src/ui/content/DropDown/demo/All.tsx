import React from 'react';
import {DropDown} from '@steroidsjs/core/ui/content';

export default () => {
    const Content = () => (
        <div>
            <p>Test data</p>
            <p>Test data</p>
            <p>Test data</p>
        </div>
    );

    return (
        <div style={{display: 'flex', rowGap: '10px', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='topLeft'
                >
                    <button>Popover Top Left</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='top'
                >
                    <button>Popover Top Center</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='topRight'
                >
                    <button>Popover Top Right</button>
                </DropDown>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='bottomLeft'
                >
                    <button>Popover Bottom Left</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='bottom'
                >
                    <button>Popover Bottom Center</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='bottomRight'
                >
                    <button>Popover Bottom Right</button>
                </DropDown>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='leftTop'
                >
                    <button>Popover Left Top</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='left'
                >
                    <button>Popover Left</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='leftBottom'
                >
                    <button>Popover Left Bottom</button>
                </DropDown>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='rightTop'
                >
                    <button>Popover Right Top</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='right'
                >
                    <button>Popover Right</button>
                </DropDown>
                <DropDown
                    content={() => <Content />}
                    closeMode='click-away'
                    position='rightBottom'
                >
                    <button>Popover Right Bottom</button>
                </DropDown>
            </div>
        </div>
    );
};
