import * as React from 'react';
import AutoCompleteField from '@steroidsjs/core/ui/form/AutoCompleteField';

export const items = [
    {
        id: '1',
        label: 'Egor',
        category: 'QA',
        additional: {
            icon: 'user',
            text: 'Senior',
        },
    },
    {
        id: '2',
        label: 'Ilya',
        category: 'QA',
        additional: {
            icon: 'user',
            text: 'Middle',
        },
    },
    {
        id: '3',
        label: 'Irina',
        category: 'QA',
        additional: {
            icon: 'user',
            text: 'Junior',
        },
    },
    {
        id: '4',
        label: 'Olga',
        category: 'Backend',
        additional: {
            icon: 'user',
            text: 'Middle',
        },
    },
    {
        id: '5',
        label: 'Pavel',
        category: 'Backend',
        additional: {
            icon: 'user',
            text: 'Junior',
        },
    },
    {
        id: '6',
        label: 'Semen',
        category: 'Backend',
        additional: {
            icon: 'user',
            text: 'Senior',
        },
    },
    {
        id: '7',
        label: 'Aleksey',
        category: 'Frontend',
        additional: {
            icon: 'user',
            text: 'Senior',
        },
    },
    {
        id: '8',
        label: 'Dasha',
        category: 'Frontend',
        additional: {
            icon: 'user',
            text: 'Middle',
        },
    },
    {
        id: '9',
        label: 'Vladislav',
        category: 'Frontend',
        additional: {
            icon: 'user',
            text: 'Junior',
        },
    },
];

/**
 * Отображение иконки и текста в AutoCompleteField
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <AutoCompleteField
            label='Outstaff'
            items={items}
        />
    </>
);
