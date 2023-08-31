import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

import './header-demo.scss';
import {NAV_ITEMS} from './basic';

/**
 * Обычный пример использования Header.
 * @order 1
 * @col 6
 */

export default () => (
    <Header
        className='header-burger'
        logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
        nav={{
            items: NAV_ITEMS,
            layout: 'navbar',
        }}
        burgerMenu={{
            content: <div>Burger content</div>,
            links: [
                {
                    label: 'Home',
                },
                {
                    label: 'About',
                },
                {
                    label: 'Contacts',
                },
            ],
        }}
    />
);
