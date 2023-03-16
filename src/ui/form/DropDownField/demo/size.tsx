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
            {Object.keys(sizes)
                .map(size => (
                    <DropDownField
                        key={size}
                        label={size}
                        size={size}
                        items={items}
                    />
                ))}
        </div>
    </>
);
