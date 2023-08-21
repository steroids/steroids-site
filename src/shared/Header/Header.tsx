import {HEADER_LINKS} from 'constants/links';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Nav from '@steroidsjs/core/ui/nav/Nav';
import ThemesButtons from '../ThemesButtons';
import HeaderLogo from './views/HeaderLogo';
import SearchInput from './views/SearchInput';
import LanguagesDropDown from './views/LanguagesDropDown';
import BurgerMenu from './views/BurgerMenu';

import './Header.scss';

export default function Header() {
    const bem = useBem('Header');
    const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

    return (
        <header className={bem.block()}>
            <HeaderLogo />
            <Nav
                items={HEADER_LINKS}
                layout="link"
                className={bem.element('nav')}
            />
            <div className={bem.element('controls')}>
                <SearchInput />
                <ThemesButtons className={bem.element('controls-themes')} />
                <LanguagesDropDown />
            </div>
            <BurgerMenu
                onClick={() => setIsBurgerOpened((prev) => !prev)}
                isBurgerOpened={isBurgerOpened}
            />
        </header>
    );
}
