/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';

import './Header.scss';
import {DropDownField, InputField} from '@steroidsjs/core/ui/form';
import {useDispatch} from '@steroidsjs/core/hooks';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {ROUTE_ROOT} from 'constants/routes';
import ThemesButtons from '../ThemesButtons';
import DropDownFieldView from './views/DropDownFieldView';

const FIRST_INDEX = 0;

const languageItems = [
    {
        id: 1,
        label: __('Ru'),
    },
    {
        id: 2,
        label: __('En'),
    },
];

export default function Header() {
    const bem = useBem('Header');
    const dispatch = useDispatch();

    const onClickLogo = React.useCallback(() => {
        dispatch(goToRoute(ROUTE_ROOT));
    }, [dispatch]);

    return (
        <header className={bem.block()}>
            <div
                onClick={onClickLogo}
                className={bem.element('logo')}
            >
                <Icon
                    name='logo'
                    className={bem.element('logo-icon')}
                />
                <h1 className={bem.element('logo-title')}>
                    {__('Steroids')}
                </h1>
            </div>
            <div className={bem.element('controls')}>
                <InputField
                    leadIcon="searchAlt"
                    size='sm'
                    className={bem.element('controls-input')}
                />
                <ThemesButtons className={bem.element('controls-themes')} />
                <DropDownField
                    view={DropDownFieldView}
                    className={bem.element('controls-lang')}
                    items={languageItems}
                    selectFirst
                    placeholder={languageItems[FIRST_INDEX].label}
                    size="sm"
                />
            </div>
        </header>
    );
}
