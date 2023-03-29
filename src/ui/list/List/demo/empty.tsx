import * as React from 'react';

import List from '@steroidsjs/core/ui/list/List/List';

/**
 * Empty view with custom text when no items
 * @order 3
 * @col 6
 */
export default () => (
    <List
        listId='ListDemoPaginationEmpty'
        items={[]}
        empty='Empty data'
    />
);
