import * as React from 'react';
import Pagination from '@steroidsjs/core/ui/list/Pagination/Pagination';
import {Text} from '@steroidsjs/core/ui/typography';

const sizes = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
};

/**
 * Sizes
 * @order 3
 * @col 12
 */
export default () => (
    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: '20px'}}>
        {Object.keys(sizes).map(size => (
            <div
                key={size}
            >
                <Text
                    style={{marginBottom: '10px'}}
                    content={sizes[size]}
                />
                <Pagination
                    aroundCount={3}
                    showSteps
                    showEdgeSteps
                    list={{
                        total: 100,
                        page: 1,
                        pageSize: 20,
                    }}
                    size={size}
                />
            </div>
        ))}
    </div>
);
