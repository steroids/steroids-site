/* eslint-disable max-len */
import * as React from 'react';
import Card from '@steroidsjs/core/ui/content/Card';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {IButtonProps} from '@steroidsjs/core/ui/form/Button/Button';
import {ILinkProps} from '@steroidsjs/core/ui/nav/Link/Link';

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
        label: 'Link',
    },
    {
        url: 'https://i.ibb.co/',
        label: 'Another link',
    },
] as ILinkProps[];

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

const cardsRows: Record<string, ICardProps[]> = {
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
            buttons: [
                buttons[0],
            ],
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
        {Object.entries(cardsRows).map(([_, cardsRow], cardsRowIndex) => (
            <div
                key={cardsRowIndex}
                style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '20px'}}
            >
                {cardsRow.map((card, cardIndex) => (
                    <Card
                        style={{width: '340px'}}
                        {...card}
                        key={cardIndex}
                    />
                ))}
            </div>
        ))}
    </div>
);
