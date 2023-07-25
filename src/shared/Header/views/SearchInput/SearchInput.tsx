import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {gsap} from 'gsap';
import {InputField} from '@steroidsjs/core/ui/form';
import {useScreen} from '@steroidsjs/core/hooks';
import InputFieldView from './InputFieldView';

import './SearchInput.scss';

const EMPTY_VALUE = '';
const SET_VALUE_DELAY = 500;

export default function SearchInput() {
    const bem = useBem('SearchInput');
    const {isTablet} = useScreen();

    const [prevValue, setPrevValue] = React.useState('');
    const fieldRef = React.useRef<HTMLInputElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleInputAnimation = React.useCallback((state: 'focus' | 'blur') => {
        if (state === 'focus') {
            gsap.to(fieldRef.current, {width: isTablet() ? '380px' : '480px', duration: 0.5, ease: 'power2.inOut'});

            setTimeout(() => {
                inputRef.current.value = prevValue;
            }, SET_VALUE_DELAY);
            return;
        }

        gsap.to(fieldRef.current, {width: '48px', duration: 0.5, ease: 'power2.inOut'});
        setPrevValue(inputRef.current.value);
        inputRef.current.value = EMPTY_VALUE;
    }, [isTablet, prevValue]);

    return (
        <InputField
            leadIcon="searchAlt"
            size='sm'
            className={bem.block()}
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
