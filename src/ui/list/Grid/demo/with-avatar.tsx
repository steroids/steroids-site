import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        avatar: 'https://i.ibb.co/T4j2NMQ/20230325210515-1.jpg',
        job: 'Backend',
    },
    {
        id: 2,
        avatar: 'https://i.ibb.co/T4j2NMQ/20230325210515-1.jpg',
        job: 'Frontend',
    },
];

export const columns = [
    {
        label: 'Photo',
        avatar: 'avatar',
        valueView: 'AvatarColumnView',
    },
    {
        label: 'Job',
        attribute: 'job',
    },
];

/**
 * Text with subtitle
 * @order 1
 * @col 8
 */
export default () => (
    <>
        <Grid
            listId='GridAvatarDemo'
            items={items}
            columns={columns}
        />
    </>
);
