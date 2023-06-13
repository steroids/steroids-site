import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';
import DemoItems from 'enums/demoItems';
import {ROUTE_ROOT} from 'constants/routes';

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
    },
];

export default () => (
    <div style={{minWidth: '400px'}}>
        <Header
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: navItems,
                layout: 'navbar',
            }}

        />
    </div>
);
