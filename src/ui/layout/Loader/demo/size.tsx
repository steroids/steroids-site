import * as React from 'react';
import {Loader} from '@steroidsjs/core/ui/layout';

/**
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'flex'}}>
        <div style={{width: 100, height: 100}}>
            <Loader
                size='sm'
                color='gradient'
            />
        </div>
        <div style={{width: 100, height: 100}}>
            <Loader
                size='lg'
                color='gradient'
            />
        </div>
    </div>
);
