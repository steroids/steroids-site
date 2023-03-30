import * as React from 'react';

import Pagination from '@steroidsjs/core/ui/list/Pagination/Pagination';

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
                <h6 style={{marginBottom: '10px'}}>
                    {sizes[size]}
                </h6>
                <Pagination
                    aroundCount={3}
                    showSteps
                    showEdgeSteps
                    list={{
                        total: 100,
                        page: 2,
                        pageSize: 20,
                    }}
                    size={size}
                />
            </div>
        ))}
    </div>
);
