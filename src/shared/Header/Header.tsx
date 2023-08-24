import {HEADER_LINKS} from 'constants/links';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {useHideScroll} from 'hooks/useHideScroll';
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

    useHideScroll(isBurgerOpened);

    return (
        <header className={bem.block()}>
            <HeaderLogo />
            <Nav
                items={HEADER_LINKS}
                className={bem.element('nav')}
                layout='link'
            />
            <div className={bem.element('controls')}>
                <SearchInput className={bem.element('controls-input')} />
                <ThemesButtons className={bem.element('controls-themes')} />
                <LanguagesDropDown className={bem.element('controls-languages')} />
            </div>
            <BurgerMenu
                onClickMenu={() => setIsBurgerOpened((prev) => !prev)}
                isBurgerOpened={isBurgerOpened}
                onSelectInMenu={() => setIsBurgerOpened(false)}
            />
        </header>
    );
}
