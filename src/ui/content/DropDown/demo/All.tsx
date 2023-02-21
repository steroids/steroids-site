import React from 'react';
import {DropDown} from '@steroidsjs/core/ui/content';
import {useBem} from '@steroidsjs/core/hooks';
import {Button} from '@steroidsjs/core/ui/form';

export default function () {
    const Content = () => (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );

    return (
        <>
            <DropDown
                content={() => <Content />}
                closeMode='click-away'
                position='leftTop'
            >
                <Button />
            </DropDown>
        </>
    );
}
