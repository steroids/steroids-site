/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {IButtonProps} from '@steroidsjs/core/ui/form/Button/Button';

const CARD_TITLE = 'Card Title';
const CARD_DESCRIPTION = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

const buttons = [
    {
        outline: true,
        color: 'primary',
        children: 'PRIMARY',
        size: 'sm',
    },
    {
        outline: false,
        color: 'primary',
        children: 'PRIMARY',
        size: 'sm',

    },
] as IButtonProps[];

const cover = 'https://i.ibb.co/1rTqmJD/image-1.jpg';

const links = [
    {
        url: 'https://i.ibb.co/',
        text: 'Link',
    },
    {
        url: 'https://i.ibb.co/',
        text: 'Another link',
    },
];

export const header = {
    avatar: {
        src: 'https://i.ibb.co/T4j2NMQ/20230325210515-1.jpg',
        status: true,
    },
    head: 'Header',
    subhead: 'Subhead',
    menu: true,
};

const footer = {
    head: 'Footer',
    subhead: 'Subhead',
};

const variants: Record<string, ICardProps[]> = {
    row1: [
        {
            header,
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            buttons,
        },
        {
            header,
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
        },
        {
            header,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            links,
        },
    ],
    row2: [
        {
            header,
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            buttons,
            footer,
        },
        {
            header,
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            footer,
        },
        {
            header,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            links,
            footer,
        },
    ],
    row3: [
        {
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            buttons,
        },
        {
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
        },
        {
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            links,
        },
    ],
    row4: [
        {
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            footer,
            buttons,
        },
        {
            cover,
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            footer,
        },
        {
            title: CARD_TITLE,
            description: CARD_DESCRIPTION,
            links,
            footer,
        },
    ],
};

/**
 * Body
 * @order 4
 * @col 12
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: '30px'}}>
        {Object.entries(variants).map(([_, cards], rowIndex) => (
            <div
                key={rowIndex}
                style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '20px'}}
            >
                {cards.map((card, cardIndex) => (
                    <Card
                        {...card}
                        key={cardIndex}
                    />
                ))}
            </div>
        ))}
    </div>
);
