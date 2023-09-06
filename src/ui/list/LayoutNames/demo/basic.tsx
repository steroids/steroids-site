import * as React from 'react';

import List from '@steroidsjs/core/ui/list/List';
import {demoItems} from '../../List/demo/basic';

/**
 * List with LayoutNames component
 * @order 5
 * @col 6
 */
export default () => (
    <List
        listId='LayoutNamesDemo'
        items={demoItems}
        layout={{
            items: [
                {
                    id: 'grid',
                    label: 'Grid',
                },
                {
                    id: 'list',
                    label: 'List',
                },
            ],
        }}
        contentClassName='row '
        itemView={(props: any) => (
            <div className={`${props.layoutSelected === 'list' ? 'col-12' : 'col-6'}`}>
                <div className='card p-2'>
                    {props.item.title}
                </div>
            </div>
        )}

    />
);
