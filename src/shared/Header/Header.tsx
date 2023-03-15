import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Nav from '@steroidsjs/core/ui/nav/Nav/Nav';
import {ROUTE_ROOT} from 'constants/routes';
import ThemesButton from './views/ThemesButton';

import './Header.scss';

export default function Header() {
    const bem = useBem('Header');

    return (
        <header className={bem.block()}>
            <div className={bem.element('left')}>
                <h1 className={bem.element('logo')}>
                    Steroids
                </h1>
                <Nav items={ROUTE_ROOT} />
            </div>
            <ThemesButton />
        </header>
    );
}
