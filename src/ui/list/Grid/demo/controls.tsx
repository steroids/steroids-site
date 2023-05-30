import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import {items, columns} from './basic';

const controls = [
    'back',
    'create',
    'view',
    'update',
    'delete',
];

/**
 * Grid with controls
 * @order 9
 * @col 8
 */
export default () => (
    <>
        {controls.map((control, controlIndex) => (
            <Grid
                key={controlIndex}
                listId='GridControlsDemo'
                items={items}
                columns={columns}
                controls={[{
                    id: control,
                }]}
            />
        ))}

    </>
);
