import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {items} from './basic';

/**
 * 'label 4' is specially opened node
 * @order 4
 * @col 8
 */
export default () => (
    <>
        <Tree
            items={items}
            selectedItemId={4}
        />
    </>
);
