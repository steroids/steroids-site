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
            property: 'pic',
            isLeft: true,
        },
        valueView: 'PictureColumnView',
    },
    {
        label: 'Just picture',
        picture: {
            property: 'pic',
        },
        valueView: 'PictureColumnView',
    },
    {
        label: 'With picture right',
        attribute: 'name',
        picture: {
            property: 'pic',
        },
        valueView: 'PictureColumnView',
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
