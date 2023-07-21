/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import {useDispatch, useScreen} from '@steroidsjs/core/hooks';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {ROUTE_ROOT} from 'constants/routes';
import ThemesButtons from '../ThemesButtons';
import HeaderLogo from './views/HeaderLogo';
import SearchInput from './views/SearchInput';
import CustomDropDown from './views/CustomDropDown';

import './Header.scss';

export default function Header() {
    const bem = useBem('Header');

    const {isPhone} = useScreen();
    const dispatch = useDispatch();
    const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

    const onClickLogo = React.useCallback(() => {
        dispatch(goToRoute(ROUTE_ROOT));
    }, [dispatch]);

    return (
        <header className={bem.block()}>
            <HeaderLogo onClick={onClickLogo} />
            {!isPhone() ? (
                <div className={bem.element('controls')}>
                    <SearchInput />
                    <ThemesButtons className={bem.element('controls-themes')} />
                    <CustomDropDown />
                </div>
            )
                : (
                    <div className={bem.element('burger')}>
                        <div
                            className={bem.element('burger-wrapper')}
                            onClick={() => setIsBurgerOpened((prev) => !prev)}
                        >
                            <Icon
                                className={bem.element('burger-button')}
                                name={isBurgerOpened ? 'cross_12x12' : 'burger'}
                            />
                        </div>
                    </div>
                )}
        </header>
    );
}
