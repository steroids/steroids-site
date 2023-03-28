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

export const items = [
    {
        id: 1,
        label: 'First',
    },
    {
        id: 2,
        label: 'Second',
    },
    {
        id: 3,
        label: 'Third',
    },
    {
        id: 4,
        label: 'Fourth',
    },
    {
        id: 5,
        label: 'Fifth',
    },
    {
        id: 6,
        label: 'Sixth',
    },
    {
        id: 7,
        label: 'Seventh',
    },
    {
        id: 8,
        label: 'Eighth',
    },
    {
        id: 9,
        label: 'Ninth',
    },
];

export default () => {
    const bem = useBem('DropDownFieldDemo');

    return (
        <div style={{display: 'flex', flexFlow: 'row wrap', columnGap: '40px', rowGap: '60px'}}>
            {dropDownVariants.map(((dropDownVariant, keyIndex) => (
                <div
                    key={keyIndex}
                    style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}
                >
                    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '10px'}}>
                        <h3 className={bem.element('header')}>{_upperFirst(dropDownVariant)}</h3>
                        {sizes.map(size => (
                            <DropDownField
                                key={size}
                                color={dropDownVariant}
                                placeholder={_upperFirst(`${dropDownVariant}`)}
                                size={size}
                                items={items}
                                itemsContent={{
                                    type: 'checkbox',
                                }}
                                groupAttribute='items'
                            />
                        ))}
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '10px'}}>
                        <h3 className={bem.element('header')}>
                            {`${_upperFirst(dropDownVariant)} outline`}
                        </h3>
                        {sizes.map(size => (

                            <DropDownField
                                key={size}
                                outline
                                color={dropDownVariant}
                                placeholder={_upperFirst(`${dropDownVariant} outline`)}
                                size={size}
                                items={items}
                                itemsContent={{
                                    type: 'checkbox',
                                }}
                                groupAttribute='items'
                            />
                        ))}
                    </div>
                </div>
            )))}
        </div>
    );
};
