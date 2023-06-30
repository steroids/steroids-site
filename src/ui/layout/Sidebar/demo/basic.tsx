import * as React from 'react';
import Sidebar from '@steroidsjs/core/ui/layout/Sidebar/Sidebar';

const voidFunction = () => {

};

/**
 * Базовое представление Sidebar
 * @order 1
 * @col 8
 */
export default () => (
    <>
        <Sidebar
            user={{
                picture: '"https://i.ibb.co/bX7Jyqw/Avatars.jpg"',
                name: 'Konstantin Konstantinonipolsky',
            }}
            logo={{
                icon: 'kozhinDev',
                label: 'KozhinDev',
            }}
            menu={{
                dropDownProps: {
                    position: 'bottom',
                    closeMode: 'click-any',
                },
                items: [
                    {label: 'Профиль', icon: 'user', onClick: voidFunction},
                    {label: 'Настройки', icon: 'setting_line', onClick: voidFunction},
                    {label: 'Выйти', icon: 'menu_left', onClick: voidFunction},
                ],
            }}
            footerIcons={[
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
            ]}
        />
    </>
);
