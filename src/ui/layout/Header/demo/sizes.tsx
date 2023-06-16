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

const sizes = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
};

export default () => (
    <>
        {Object.entries(sizes).map(([size], label) => (
            <Header
                key={label}
                label={label}
                size={size}
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
        ))}
    </>
);
