import * as React from 'react';

import Form from '@steroidsjs/core/ui/form/Form';
import InputField from '@steroidsjs/core/ui/form/InputField';
import DropDownField from '@steroidsjs/core/ui/form/DropDownField';
import FieldSet from '@steroidsjs/core/ui/form/FieldSet';

/**
 * Обычный пример использования FieldSet.
 * @order 1
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='FieldSetForm'
            useRedux
        >
            <FieldSet
                fields={[
                    {
                        attribute: 'name',
                        component: InputField,
                        label: 'Name',
                    },
                    {
                        attribute: 'email',
                        component: InputField,
                        label: 'Email',
                    },
                ]}
                label='Label'
            />
        </Form>
    </>
);
