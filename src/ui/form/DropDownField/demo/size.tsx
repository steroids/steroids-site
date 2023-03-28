import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';

import {items} from './basic';

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

/**
 * По-умлочанию DropDownField имеет 3 заданных размера.
 * @order 10
 * @col 6
 */

export default () => (
    <>
        <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}>
            {Object.entries(sizes)
                .map(([size, label]) => (
                    <DropDownField
                        key={size}
                        size={size}
                        items={items}
                        placeholder={label}
                        autoComplete
                        searchPlaceholder='Search...'
                        multiple
                        itemsContent={{
                            type: 'radio',
                        }}
                    />
                ))}
        </div>
    </>
);
