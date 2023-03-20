import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';
import _upperFirst from 'lodash-es/upperFirst';
import {useBem} from '@steroidsjs/core/hooks';
import './all-variants-of-colors.scss';

/**
 * Использование свойства самозаполнения.
 * @order 5
 * @col 6
 */

const dropDownVariants = [
    'basic',
    'primary',
    'secondary',
    'warning',
    'danger',
    'info',
    'success',
];

const sizes = [
    'sm',
    'md',
    'lg',
];

const phone = (
    <svg
        fill="#000000"
        width="24px"
        height="24px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
    </svg>
);

const image = 'https://i.ibb.co/nbmXwQz/image-11.png';

export const items = [
    {
        id: 1,
        label: 'First',
        contentType: 'checkbox',
    },
    {
        id: 2,
        label: 'Second',
        contentType: 'checkbox',
    },
    {
        id: 3,
        label: 'Third',
        contentType: 'checkbox',
    },
    {
        id: 4,
        label: 'Fourth',
        contentType: 'checkbox',
    },
    {
        id: 5,
        label: 'Fifth',
        contentType: 'checkbox',
    },
    {
        id: 6,
        label: 'Sixth',
        contentType: 'checkbox',
    },
    {
        id: 7,
        label: 'Seventh',
        contentType: 'checkbox',
    },
    {
        id: 8,
        label: 'Eighth',
        contentType: 'checkbox',
    },
    {
        id: 9,
        label: 'Ninth',
        contentType: 'img',
        contentSrc: 'https://i.ibb.co/nbmXwQz/image-11.png',

    },
];

export default () => {
    const bem = useBem('DropDownFieldDemo');

    return (
        <div style={{display: 'flex', flexFlow: 'row wrap', columnGap: '40px', rowGap: '60px'}}>
            {dropDownVariants.map(((colorVariant, keyIndex) => (
                <div
                    key={keyIndex}
                    style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}
                >
                    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '10px'}}>
                        <h3 className={bem.element('header')}>{_upperFirst(colorVariant)}</h3>
                        {sizes.map(size => (
                            <DropDownField
                                key={size}
                                color={colorVariant}
                                size={size}
                                items={items}
                                groupAttribute='items'
                            />
                        ))}
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '10px'}}>
                        <h3 className={bem.element('header')}>
                            {_upperFirst(colorVariant)}
                            {' '}
                            outline
                        </h3>
                        {sizes.map(size => (

                            <DropDownField
                                key={size}
                                outline
                                color={colorVariant}
                                size={size}
                                items={items}
                                groupAttribute='items'
                            />
                        ))}
                    </div>
                </div>
            )))}
        </div>
    );
};
