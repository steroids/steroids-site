import * as React from 'react';
import {Avatar} from '@steroidsjs/core/ui/content/';

/**
 * Basic sizes with image source, border line around and status
 */

export default () => (
    <div style={{display: 'grid', gridGap: '20px'}}>
        <div style={{display: 'flex', gridGap: '20px'}}>
            <Avatar
                size={100}
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
                hasBorder
            />
            <Avatar
                size={100}
                shape='square'
                title='Kozhin Dev'
            />
        </div>
        <div style={{display: 'flex', gridGap: '20px'}}>
            <Avatar
                size='sm'
                title='Kozhin Dev'
                status
                hasBorder
            />
            <Avatar
                size='sm'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
                hasBorder
            />
        </div>
        <div style={{display: 'flex', gridGap: '20px'}}>
            <Avatar
                size='md'
                title='Kozhin Dev'
                status
                hasBorder
            />
            <Avatar
                size='md'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
                hasBorder
            />
        </div>
        <div style={{display: 'flex', gridGap: '20px'}}>
            <Avatar
                size='lg'
                title='Kozhin Dev'
                status
                hasBorder
            />
            <Avatar
                size='lg'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
                hasBorder
            />
        </div>
    </div>
);
