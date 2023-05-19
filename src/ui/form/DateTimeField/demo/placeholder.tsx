import * as React from 'react';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';

/**
 * Сообщение внутри импута
 * @order 6
 * @col 6
 */

export default () => (
    <>
        <DateTimeField
            label='Placeholder'
            placeholder='Введите удобную вам дату встречи'
        />
    </>
);
