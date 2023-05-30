import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import {items, columns} from '../../Grid/demo/basic';

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
        <Grid
            listId='ControlsColumnDemo'
            items={items}
            columns={columns}
            controls={controls.map(control => ({id: control}))}
        />

    </>
);
