import * as React from 'react';
import {Sidebar} from '@steroidsjs/core/ui/layout';

const voidFunction = () => { };

/**
 * Базовое представление Sidebar
 * @order 1
 * @col 8
 */
export default () => {
    const props = {
        user: {
            picture: '/images/demo/avatar.webp',
            name: 'Konstantin Konstantinonipolsky',
        },
        logo: {
            icon: 'kozhinDev',
            label: 'KozhinDev',
        },
        menu: {
            dropDownProps: {
                position: 'bottom',
                closeMode: 'click-any',
            },
            items: [
                {label: 'Профиль', icon: 'user', onClick: voidFunction},
                {label: 'Настройки', icon: 'setting_line', onClick: voidFunction},
                {label: 'Выйти', icon: 'menu_left', onClick: voidFunction},
            ],
        },
        footerIcons: [
            {
                name: 'vk',
            },
            {
                name: 'telegram',
            },
            {
                name: 'whatsapp',
            },
            {
                name: 'facebook',
            },
            {
                name: 'instagram',
            },
        ],
        hasSeparatedNavItem: true,
        items:
            [
                {
                    id: '1',
                    label: 'Dashboard',
                    icon: 'img_box',
                    badge: {
                        value: 12,
                        color: 'primary',
                    },
                },
                {
                    id: 2,
                    label: 'Statistics',
                    icon: 'chart',
                },
                {
                    id: 3,
                    label: 'Customers',
                    icon: 'group',
                },
                {
                    id: 4,
                    label: 'Map',
                    icon: 'map',
                },
                {
                    id: 5,
                    label: 'Projects',
                    icon: 'folder',
                },
                {
                    id: 6,
                    label: 'Report',
                    icon: 'pie_chart',
                },
                {
                    id: 7,
                    label: 'Settings',
                    icon: 'setting_line',
                    border: true,
                    items: [
                        {
                            id: 8,
                            label: 'Point 1',
                        },
                        {
                            id: 9,
                            label: 'Point 1',
                        },
                        {
                            id: 10,
                            label: 'Point 1',
                        },
                        {
                            id: 11,
                            label: 'Point 1',
                        },
                    ],
                },
                {
                    id: 12,
                    label: 'Support',
                    icon: 'support',
                },
            ],
    };

    return (
        <>
            <Sidebar {...props} />
        </>
    );
};
