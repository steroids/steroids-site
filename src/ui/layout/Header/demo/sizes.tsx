import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

import './header-demo.scss';
import {NAV_ITEMS} from './basic';
import {HEADER_MENU_ITEMS} from './auth';

/**
 * Обычный пример использования Header.
 * @order 1
 * @col 6
 */

const sizes = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
};

export default () => (
    <>
        {Object.entries(sizes).map(([size], label) => (
            <Header
                className='header-size'
                key={label}
                label={label}
                size={size}
                logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
                nav={{
                    items: NAV_ITEMS,
                    layout: 'navbar',
                }}
                user={{
                    name: 'KozhinDev',
                    avatar: {
                        title: 'K D',
                    },
                    menu: {
                        items: HEADER_MENU_ITEMS,
                        dropDownProps: {
                            position: 'bottom',
                            closeMode: 'click-any',
                        },
                    },
                }}
            />
        ))}
    </>
);
