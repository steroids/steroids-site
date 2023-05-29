import * as React from 'react';

import Nav from '@steroidsjs/core/ui/nav/Nav';
import {Text} from '@steroidsjs/core/ui/typography';
import _upperFirst from 'lodash-es/upperFirst';

export const items = [
    {
        id: 'Item',
        label: 'Item',
        disabled: true,
    },
];

const layouts = ['button', 'icon', 'link', 'tabs', 'navbar', 'list'];

/**
 * Basic
 * @order 1
 * @col 6
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: 90}}>
        {layouts.map((layout, index) => (
            <div key={index}>
                <Text>{_upperFirst(layout)}</Text>
                <Nav
                    layout={layout}
                    items={items}
                />
            </div>
        ))}
    </div>
);
