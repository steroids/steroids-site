import * as React from 'react';
import {Avatar, AvatarGroup} from '@steroidsjs/core/ui/content/';

/**
 * Group of avatars
 * @order 5
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', gridGap: '20px'}}>
        <AvatarGroup>
            <Avatar
                size='sm'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='sm'
                title='Kozhin Dev'
            />
            <Avatar
                size='sm'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
            />
            <Avatar
                size='sm'
                title='Kozhin Dev'
                status
            />
        </AvatarGroup>
        <AvatarGroup maxCount={2}>
            <Avatar
                size='md'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='md'
                title='Kozhin Dev'
            />
            <Avatar
                size='md'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
            />
            <Avatar
                size='md'
                title='Kozhin Dev'
                status
            />
        </AvatarGroup>
        <AvatarGroup>
            <Avatar
                size='lg'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
            />
            <Avatar
                size='lg'
                title='Kozhin Dev'
            />
            <Avatar
                size='lg'
                src='https://i.ibb.co/1fWbXCt/F-1.png'
                status
            />
            <Avatar
                size='lg'
                title='Kozhin Dev'
                status
            />
        </AvatarGroup>
    </div>
);
