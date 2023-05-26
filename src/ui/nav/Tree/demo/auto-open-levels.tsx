import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {items} from './basic';

/**
 * The max opened nesting level is 3
 * @order 3
 * @col 8
 */
export default () => (
    <>
        <Tree
            items={items}
            autoOpenLevels={3}
        />
    </>
);
