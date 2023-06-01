import * as React from 'react';

import PaginationSize from '@steroidsjs/core/ui/list/PaginationSize';
import Text from '@steroidsjs/core/ui/typography/Text';
import {demoItems} from '../../../../ui/list/List/demo/basic';

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

/**
 * Sizes
 * @order 2
 * @col 12
 */
export default () => (
    <>
        <div style={{display: 'flex', columnGap: '24px'}}>
            {Object.keys(sizes)
                .map(size => (
                    <div
                        key={size}
                    >
                        <Text content={sizes[size]} />
                        <PaginationSize
                            list={{
                                pageSize: 3,
                                items: demoItems,
                            }}
                            enable
                            attribute='pageSize'
                            sizes={[3, 6, 9]}
                            defaultValue={3}
                            position='top'
                            buttonProps={{
                                size,
                            }}
                        />
                    </div>
                ))}
        </div>
    </>
);
