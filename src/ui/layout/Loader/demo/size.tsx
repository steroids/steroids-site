import * as React from 'react';
import {Loader} from '@steroidsjs/core/ui/layout';

/**
 * @order 1
 * @col 6
 */

export default () => (
    <>
        <div style={{width: 100, height: 100, display: 'inline-block'}}>
            <Loader
                size='sm'
                color='primary'
            />
        </div>
        <div style={{width: 100, height: 100, display: 'inline-block'}}>
            <Loader
                size='lg'
                color='primary'
            />
        </div>
    </>
);
