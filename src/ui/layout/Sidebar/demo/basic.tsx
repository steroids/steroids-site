import * as React from 'react';
import Sidebar from '@steroidsjs/core/ui/layout/Sidebar/Sidebar';

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
                icon: 'danger',
                label: 'KozhinDev',
            }}
        />
    </>
);
