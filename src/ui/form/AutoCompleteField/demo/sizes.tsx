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
    },
    {
        id: '3',
        label: 'Olga',
        category: 'Backend',
        additional: {
            icon: 'user',
            text: 'Middle',
        },
    },
    {
        id: '4',
        label: 'Pavel',
    },
    {
        id: '5',
        label: 'Aleksey',
        category: 'Frontend',
        additional: {
            icon: 'user',
            text: 'Senior',
        },
    },
    {
        id: '6',
        label: 'Dasha',
    },
];

/**
 * По-умлочанию AutoCompleteField имеет 3 заданных размера.
 * @order 6
 * @col 12
 */

const sizes = {
    sm: 'Small',
    md: 'Middle',
    lg: 'Large',
};

export default () => (
    <div className='row'>
        {Object.entries(sizes).map(([size, label]) => (
            <div
                className='col'
                key={size}
            >
                <AutoCompleteField
                    label={label}
                    size={size}
                    items={items}
                />
            </div>
        ))}
    </div>
);
