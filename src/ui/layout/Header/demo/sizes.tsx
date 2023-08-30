import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';

import './header-demo.scss';

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

const voidFunction = () => { };

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
                    items: navItems,
                    layout: 'navbar',
                }}
                user={{
                    name: 'KozhinDev',
                    avatar: {
                        title: 'K D',
                    },
                    menu: {
                        items: [
                            {label: 'Профиль', icon: 'user', onClick: voidFunction},
                            {label: 'Настройки', icon: 'setting_line', onClick: voidFunction},
                            {label: 'Выйти', icon: 'menu_left', onClick: voidFunction},
                        ],
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
