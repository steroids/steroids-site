import * as React from 'react';

import List from '@steroidsjs/core/ui/list/List';
import {demoItems} from './basic';

import './list.scss';

/**
 * List with layout switcher
 * @order 5
 * @col 6
 */
export default () => (
    <List
        listId='ListDemoLayout'
        items={demoItems}
        layout={{
            items: [
                {
                    id: 'list',
                    label: 'List',
                },
                {
                    id: 'grid',
                    label: 'Grid',
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
