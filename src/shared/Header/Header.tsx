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
import {gsap} from 'gsap';
import ThemesButtons from '../ThemesButtons';
import DropDownFieldView from './views/DropDownFieldView';
import InputFieldView from './views/InputFieldView';

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

const EMPTY_VALUE = '';
const SET_VALUE_DELAY = 500;

export default function Header() {
    const bem = useBem('Header');
    const dispatch = useDispatch();
    const [prevValue, setPrevValue] = React.useState('');
    const fieldRef = React.useRef<HTMLInputElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickLogo = React.useCallback(() => {
        dispatch(goToRoute(ROUTE_ROOT));
    }, [dispatch]);

    const handleInputAnimation = React.useCallback((state: 'focus' | 'blur') => {
        if (state === 'focus') {
            gsap.to(fieldRef.current, {width: '480px', duration: 0.5, ease: 'power2.inOut'});

            setTimeout(() => {
                inputRef.current.value = prevValue;
            }, SET_VALUE_DELAY);
            return;
        }

        gsap.to(fieldRef.current, {width: '48px', duration: 0.5, ease: 'power2.inOut'});
        setPrevValue(inputRef.current.value);
        inputRef.current.value = EMPTY_VALUE;
    }, [prevValue]);

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
                    viewProps={{
                        onFocus: () => handleInputAnimation('focus'),
                        onBlur: () => handleInputAnimation('blur'),
                        ref: fieldRef,
                        inputRef,
                    }}
                    view={InputFieldView}
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
