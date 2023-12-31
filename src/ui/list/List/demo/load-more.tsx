import * as React from 'react';
import List from '@steroidsjs/core/ui/list/List';
import {demoItems} from './basic';

/**
 * List with load more and show sizes switcher
 * @order 4
 * @col 6
 */
export default () => (
    <List
        listId='ListDemoLoadMore'
        items={demoItems}
        pagination={{
            loadMore: true,
        }}
        paginationSize={{
            enable: true,
            sizes: [3, 6],
            defaultValue: 3,
        }}
        itemProps={{
            className: 'list-group-item',
        }}
    />
);
