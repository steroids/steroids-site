import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

import './header-demo.scss';

/**
 * Обычный пример использования Header.
 * @order 1
 * @col 6
 */

export const NAV_ITEMS = [
    {
        id: 1,
        label: __('О нас'),
    },
    {
        id: 2,
        label: __('Услуги'),
    },
    {
        id: 3,
        label: __('Контакты'),
        disabled: true,
    },
];

export default () => (
    <Header
        className='header-basic'
        logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
        nav={{
            items: NAV_ITEMS,
            layout: 'navbar',
        }}
    />
);
