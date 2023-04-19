import * as React from 'react';
import {CheckboxField, InputField, FieldList, Form} from '@steroidsjs/core/ui/form';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 12
 */

export default () => (
    <>
        <Form formId='FieldListForm'>
            <FieldList
                showRemove={false}
                disabled
                attribute='items'
                label='Items'
                initialRowsCount={3}
                items={[
                    {
                        title: 'Направление подготовки',
                        attribute: 'name',
                        component: InputField,
                        placeholder: 'Направление подготовки',
                        size: 'sm',
                    },
                    {
                        title: 'Начало мероприятия (Красноярское время)',
                        attribute: 'start',
                        component: InputField,
                        placeholder: '14.07.2022  08:00',
                        size: 'sm',
                    },
                    {
                        title: 'Конец мероприятия (Красноярское время)',
                        attribute: 'end',
                        component: InputField,
                        placeholder: '14.07.2022  08:00',
                        size: 'sm',
                    },
                    {
                        title: 'Отправлять в ЕППУ',
                        attribute: 'boolean',
                        component: CheckboxField,
                        placeholder: 'Конец мероприятия (Красноярское время)',
                        size: 'sm',
                    },
                ]}
            />
        </Form>
    </>
);
