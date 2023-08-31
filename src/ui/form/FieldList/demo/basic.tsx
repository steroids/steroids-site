import * as React from 'react';
import {CheckboxField, InputField, FieldList, Form, NumberField} from '@steroidsjs/core/ui/form';

import './field-list-demo.scss';

/**
 * Обычный пример использования FieldList.
 * @order 1
 * @col 12
 */

export const FIELD_LIST_ITEMS = [
    {
        title: __('Направление подготовки'),
        attribute: 'name',
        component: InputField,
        placeholder: __('Направление подготовки'),
        size: 'sm',
    },
    {
        title: __('Описание направления подготовки'),
        attribute: 'descriptions',
        component: InputField,
        placeholder: __('Описание направления подготовки'),
        size: 'sm',
    },
    {
        title: __('Количество мест'),
        attribute: 'count',
        component: NumberField,
        placeholder: '0',
        size: 'sm',
    },
    {
        title: __('Отправлять в ЕППУ'),
        attribute: 'needSend',
        component: CheckboxField,
        size: 'sm',
    },
];

export default () => (
    <>
        <Form
            formId='FieldListForm'
            className='field-list-demo'
        >
            <FieldList
                attribute='items'
                label={__('Данные по направлениям')}
                initialRowsCount={3}
                items={FIELD_LIST_ITEMS}
            />
        </Form>
    </>
);
