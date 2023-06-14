import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

/**
 * Пример использования Header с auth
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
    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: 10}}>
        <Header
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: navItems,
                layout: 'navbar',
            }}
            auth="root"
        />
        <Header
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: navItems,
                layout: 'navbar',
            }}
            auth={{
                username: 'KozhinDev',
                userAvatar: {
                    title: 'K D',
                },
            }}
        />
    </div>
);
