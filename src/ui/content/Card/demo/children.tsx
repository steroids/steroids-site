import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '20px'}}>
        <Card title='Card with children'>Hello from children!</Card>
    </div>
);
