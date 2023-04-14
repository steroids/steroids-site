/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {IButtonProps} from '@steroidsjs/core/ui/form/Button/Button';
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
] as ICardProps[];

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '20px'}}>
        {/* {cards.map((card, cardIndex) => (
            <Card
                style={{width: '340px'}}
                key={cardIndex}
                {...card}
            />
        ))} */}
    </div>
);
