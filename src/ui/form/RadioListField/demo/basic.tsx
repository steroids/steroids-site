import * as React from 'react';
import RadioListField from '@steroidsjs/core/ui/form/RadioListField/RadioListField';

/**
 * Обычный пример использования RadioListField.
 * @order 1
 * @col 6
 */

export const items = [
    {
        id: 1,
        label: 'First',
    },
    {
        id: 2,
        label: 'Second',
    },
    {
        id: 3,
        label: 'Third',
    },
    {
        id: 4,
        label: 'Fourth',
    },
];

export default () => (
    <>
        <RadioListField
            selectedIds={[1]}
            label='Basic'
            items={items}
        />
    </>
);
