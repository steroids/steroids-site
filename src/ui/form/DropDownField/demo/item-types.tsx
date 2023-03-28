import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';
import _upperFirst from 'lodash-es/upperFirst';
import {items} from './basic';

/**
 * Использование свойства самозаполнения.
 * @order 5
 * @col 6
 */

const types = [
    {

        color: 'primary',
        type: 'radio',
        src: null,
        showEllipses: false,
    },
    {
        color: 'secondary',
        type: 'checkbox',
        src: null,
        showEllipses: true,

    },
    {
        color: 'success',
        type: 'img',
        src: 'https://i.ibb.co/nbmXwQz/image-11.png',
        showEllipses: false,

    },
    {
        color: 'info',
        type: 'icon',
        src: 'user',
        showEllipses: true,
    },
];

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '20px'}}>
        {types.map((item, itemIndex) => (
            <DropDownField
                key={itemIndex}
                items={items}
                color={item.color}
                placeholder={_upperFirst(item.type)}
                multiple={item.type !== 'radio'}
                showEllipses={item.showEllipses}
                itemsContent={{
                    type: item.type,
                    src: item.src,
                }}
            />
        ))}
    </div>
);
