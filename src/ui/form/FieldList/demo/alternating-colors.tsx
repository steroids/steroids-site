import * as React from 'react';
import {FieldList, Form} from '@steroidsjs/core/ui/form';

import './field-list-demo.scss';
import {FIELD_LIST_ITEMS} from './basic';
/**
 * Пример использования FieldList с зеброй.
 * @order 1
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='FieldListForm'
            className='field-list-demo'
        >
            <FieldList
                hasAlternatingColors
                attribute='items'
                label={__('Данные по направлениям')}
                initialRowsCount={4}
                items={FIELD_LIST_ITEMS}
            />
        </Form>
    </>
);
