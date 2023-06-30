import * as React from 'react';
import {Avatar} from '@steroidsjs/core/ui/content/';

/**
 * Basic sizes with title and online status
 * @order 2
 * @col 3
 */

export default () => (
    <div style={{display: 'grid', gridGap: '20px'}}>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='sm'
                title='Kozhin Dev'
            />
            <Avatar
                size='sm'
                title='Kozhin Dev'
                status
            />
        </div>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='md'
                title='Kozhin Dev'
            />
            <Avatar
                size='md'
                title='Kozhin Dev'
                status
            />
        </div>
        <div style={{display: 'flex', gridGap: '10px'}}>
            <Avatar
                size='lg'
                title='Kozhin Dev'
            />
            <Avatar
                size='lg'
                title='Kozhin Dev'
                status
            />
        </div>
    </div>
);
