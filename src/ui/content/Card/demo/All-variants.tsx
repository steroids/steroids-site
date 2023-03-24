/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';

const CARD_TITLE = 'Card Title';
const CARD_DESCRIPTION = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

const variants: Record<string, ICardProps[]> = {
    row: [
        {
            cover: 'https://i.ibb.co/1rTqmJD/image-1.jpg',
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            footer: 'Footer',
        },
    ],
};

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div>
        {Object.entries(variants).map(([row, cards]) => cards.map((card, cardIndex) => (
            <Card
                {...card}
                key={cardIndex}
            />
        )))}
    </div>
);
