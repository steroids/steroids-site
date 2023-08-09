import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Link from '@steroidsjs/core/ui/nav/Link';
import {githubLink} from 'data/indexPageData';
import {ROUTE_DOCS} from 'constants/routes';
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
            <nav className={bem.element('nav')}>
                <ul className={bem.element('nav-list')}>
                    <li className={bem.element('nav-list-item')}>
                        <Link
                            toRoute={ROUTE_DOCS}
                            label={__('Документация')}
                        />
                    </li>
                    <li className={bem.element('nav-list-item')}>
                        <Link
                            toRoute={ROUTE_DOCS}
                            label={__('Набор статей')}
                        />
                    </li>
                    <li className={bem.element('nav-list-item')}>
                        <Link
                            url={githubLink}
                            target='blank'
                            label={__('GIT')}
                        />
                    </li>
                </ul>
            </nav>
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
