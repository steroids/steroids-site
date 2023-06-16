import * as React from 'react';
import {Avatar} from '@steroidsjs/core/ui/content/';

/**
 * Basic sizes with image source, online status and square shape
 * @order 3
 * @col 3
 */

export default () => (
    <div style={{display: 'grid', gridGap: '20px'}}>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='sm'
                shape='square'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='sm'
                shape='square'
                title='Kozhin Dev'
            />
        </div>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='md'
                shape='square'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='md'
                shape='square'
                title='Kozhin Dev'
            />
        </div>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='lg'
                shape='square'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='lg'
                shape='square'
                title='Kozhin Dev'
            />
        </div>
    </div>
);
