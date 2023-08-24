import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {gsap} from 'gsap';
import {InputField} from '@steroidsjs/core/ui/form';
import {useScreen} from '@steroidsjs/core/hooks';
import InputFieldView from './InputFieldView';

import './SearchInput.scss';

const EMPTY_VALUE = '';
const SET_VALUE_DELAY = 500;
const HEADER_NAV_CLASS = 'Header__nav';
const HEADER_HIDE_BREAKPOINT = 1340;
const STOP_ANIMATION_BREAKPOINT = 748;
const NAV_HIDE_BREAKPOINT = 768;
export interface ISearchInputProps {
    className?: string;
    placeholder?: string;
}

export default function SearchInput(props: ISearchInputProps) {
    const bem = useBem('SearchInput');
    const {width} = useScreen();

    const [prevValue, setPrevValue] = React.useState('');
    const fieldRef = React.useRef<HTMLInputElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleInputAnimation = React.useCallback((state: 'focus' | 'blur') => {
        const headerNav = document.querySelector(`.${HEADER_NAV_CLASS}`);

        if (width > STOP_ANIMATION_BREAKPOINT) {
            if (state === 'focus') {
                gsap.to(fieldRef.current, {width: width <= NAV_HIDE_BREAKPOINT ? '380px' : '480px', duration: 0.5, ease: 'power2.inOut'});

                if (width <= HEADER_HIDE_BREAKPOINT) {
                    headerNav.classList.toggle(`${HEADER_NAV_CLASS}-hidden`);
                }

                setTimeout(() => {
                    inputRef.current.value = prevValue;
                }, SET_VALUE_DELAY);
                return;
            }

            gsap.to(fieldRef.current, {width: '48px', duration: 0.5, ease: 'power2.inOut'});
            setPrevValue(inputRef.current.value);
            inputRef.current.value = EMPTY_VALUE;

            if (width <= HEADER_HIDE_BREAKPOINT) {
                setTimeout(() => headerNav.classList.toggle(`${HEADER_NAV_CLASS}-hidden`), SET_VALUE_DELAY);
            }
        }
    }, [prevValue, width]);

    return (
        <InputField
            leadIcon="searchAlt"
            size='sm'
            placeholder={props.placeholder}
            className={bem(
                bem.block(),
                props.className,
            )}
            viewProps={{
                onFocus: () => handleInputAnimation('focus'),
                onBlur: () => handleInputAnimation('blur'),
                ref: fieldRef,
                inputRef,
            }}
            view={InputFieldView}
        />
    );
}
