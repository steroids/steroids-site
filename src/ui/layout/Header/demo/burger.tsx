import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

/**
 * Обычный пример использования Header.
 * @order 1
 * @col 6
 */

const navItems = [
    {
        id: 1,
        label: 'О нас',
    },
    {
        id: 2,
        label: 'Услуги',
    },
    {
        id: 3,
        label: 'Контакты',
        disabled: true,
    },
];

export default () => (
    <Header
        logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
        nav={{
            items: navItems,
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
