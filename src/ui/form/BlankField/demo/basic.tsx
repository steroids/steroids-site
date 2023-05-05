import * as React from 'react';
import BlankField from '@steroidsjs/core/ui/form/BlankField/BlankField';
import {AutoCompleteField} from '@steroidsjs/core/ui/form';

/**
 * Простой пример использзования BlankField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: '1',
        label: 'Moscow',
    },
    {
        id: '2',
        label: 'Krasnoyarsk',
    },
    {
        id: '3',
        label: 'Krasnodar',
    },
];

export default () => (
    <>
        <BlankField>
            <AutoCompleteField items={items} />
        </BlankField>
    </>
);
