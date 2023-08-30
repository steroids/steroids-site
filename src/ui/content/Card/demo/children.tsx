import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';

import './card-demo.scss';

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '20px'}}>
        <Card
            title='Card with children'
            className='card'
        >
            Hello from children!

        </Card>
    </div>
);
