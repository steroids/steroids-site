import * as React from 'react';
import {FieldList, Form} from '@steroidsjs/core/ui/form';

import './field-list-demo.scss';
import {FIELD_LIST_ITEMS} from './basic';

/**
 * Выключенный или недоступный для использования.
 * @order 2
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='FieldListForm'
            className='field-list-demo'
        >
            <FieldList
                showRemove={false}
                disabled
                attribute='items'
                label={__('Данные по направлениям')}
                initialRowsCount={3}
                items={FIELD_LIST_ITEMS}
            />
        </Form>
    </>
);
