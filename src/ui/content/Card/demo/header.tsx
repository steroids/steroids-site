/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {header} from './All-variants';

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
];

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '20px'}}>
        {cards.map((card, cardIndex) => (
            <Card
                style={{width: '340px'}}
                key={cardIndex}
                {...card}
            />
        ))}
    </div>
);
