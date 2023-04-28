import * as React from 'react';
import {CheckboxField, InputField, FieldList, Form, NumberField} from '@steroidsjs/core/ui/form';

/**
 * Пример использования FieldList с зеброй.
 * @order 1
 * @col 12
 */

export default () => (
    <>
        <Form formId='FieldListForm'>
            <FieldList
                hasAlternatingColors
                attribute='items'
                label='items'
                initialRowsCount={4}
                items={[
                    {
                        title: 'Направление подготовки',
                        attribute: 'name',
                        component: InputField,
                        placeholder: 'Направление подготовки',
                        size: 'sm',
                    },
                    {
                        title: 'Описание направления подготовки',
                        attribute: 'descriptions',
                        component: InputField,
                        placeholder: 'Описание направления подготовки',
                        size: 'sm',
                    },
                    {
                        title: 'Количество мест',
                        attribute: 'count',
                        component: NumberField,
                        placeholder: '0',
                        size: 'sm',
                    },
                    {
                        title: 'Отправлять в ЕППУ',
                        attribute: 'needSend',
                        component: CheckboxField,
                        size: 'sm',
                    },
                ]}
            />
        </Form>
    </>
);
