/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {header} from './All-variants';

import './card-demo.scss';

const cards = [
    {
        header,
    },
    {
        header: {
            ...header,
            avatar: undefined,
        },
    },
] as any;

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '20px'}}>
        {cards.map((card, cardIndex) => (
            <Card
                className='card'
                key={cardIndex}
                {...card}
            />
        ))}
    </div>
);
