import * as React from 'react';
import _startCase from 'lodash-es/startCase';
import Nav from '@steroidsjs/core/ui/nav/Nav';
import {Text} from '@steroidsjs/core/ui/typography';
import {items} from '../../../nav/Nav/demo/basic';

const layouts = ['button', 'icon', 'link', 'tabs', 'navbar', 'list'];
const icons = ['coffee', 'shopping-basket', 'hospital'];

/**
 * Nav with different layouts
 * @order 2
 * @col 12
 */
export default () => (
    <>
        <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: 60}}>
            {layouts.map(layout => (
                <div
                    key={layout}
                >
                    <Text>{_startCase(layout)}</Text>
                    <Nav
                        items={layout === 'icon'
                            ? items.map((item, index) => ({
                                ...item,
                                icon: icons[index],
                            }))
                            : items}
                        layout={layout}
                    />
                </div>
            ))}
        </div>
    </>
);
