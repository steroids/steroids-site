import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        pic: 'https://i.ibb.co/ZSSgW75/image-9.jpg',
    },
    {
        id: 2,
        name: 'Petr',
        surname: 'Petrov',
        pic: 'https://i.ibb.co/ZSSgW75/image-9.jpg',
    },
    {
        id: 3,
        name: 'John',
        surname: 'Doe',
        pic: 'https://i.ibb.co/ZSSgW75/image-9.jpg',
    },
];

export const columns = [
    {
        label: 'Default',
        attribute: 'name',
        picture: {
            attribute: 'pic',
        },
        subtitle: 'surname',
        valueView: 'ContentColumnView',
    },
    {
        label: 'Just picture',
        picture: {
            attribute: 'pic',
        },
        valueView: 'ContentColumnView',
    },
    {
        label: 'With picture left',
        attribute: 'name',
        picture: {
            attribute: 'pic',
            isLeft: true,
        },
        subtitle: 'surname',
        valueView: 'ContentColumnView',
    },
];

/**
 * Text with subtitle
 * @order 1
 * @col 8
 */
export default () => (
    <>
        <Grid
            listId='GridPicDemo'
            items={items}
            columns={columns}
        />
    </>
);
