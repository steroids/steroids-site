import * as React from 'react';
import {Avatar} from '@steroidsjs/core/ui/content/';

/**
 * Basic sizes with image source, border line around and status
 */

export default function () {
    return (
        <div style={{display: 'grid', gridGap: '20px'}}>
            <div style={{display: 'flex', gridGap: '20px'}}>
                <Avatar size={100} src='https://i.ibb.co/1fWbXCt/F-1.png' status hasBorder />
                <Avatar size={100} shape='square' title='Kozhin Dev' />
            </div>
            <div style={{display: 'flex', gridGap: '20px'}}>
                <Avatar size='small' title='Kozhin Dev' status hasBorder />
                <Avatar size='small' src='https://i.ibb.co/1fWbXCt/F-1.png' status hasBorder />
            </div>
            <div style={{display: 'flex', gridGap: '20px'}}>
                <Avatar size='middle' title='Kozhin Dev' status hasBorder />
                <Avatar size='middle' src='https://i.ibb.co/1fWbXCt/F-1.png' status hasBorder />
            </div>
            <div style={{display: 'flex', gridGap: '20px'}}>
                <Avatar size='large' title='Kozhin Dev' status hasBorder />
                <Avatar size='large' src='https://i.ibb.co/1fWbXCt/F-1.png' status hasBorder />
            </div>
            <div style={{display: 'flex', gridGap: '20px'}}>
                <Avatar size='x-large' title='Kozhin Dev' status hasBorder />
                <Avatar size='x-large' src='https://i.ibb.co/1fWbXCt/F-1.png' status hasBorder />
            </div>
        </div>
    );
}
