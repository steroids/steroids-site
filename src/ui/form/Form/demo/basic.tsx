import * as React from 'react';
import Form from '@steroidsjs/core/ui/form/Form/Form';
import TextField from '@steroidsjs/core/ui/form/TextField';
import InputField from '@steroidsjs/core/ui/form/InputField';

/**
 * Обычный пример использования Form.
 */

export default () => (
    <>
        <Form
            formId='TestForm'
            useRedux
            syncWithAddressBar
            autoFocus
            size='large'
            fields={[
                {
                    component: InputField,
                    attribute: 'email',
                    label: 'Email',
                },
                {
                    component: InputField,
                    attribute: 'phone',
                    label: 'Phone',
                    maskProps: {
                        mask: '+7 (999) 999-99-99',
                    },
                },
                {
                    component: TextField,
                    attribute: 'message',
                    label: 'Message',
                },
            ]}
            submitLabel='Submit'
            validators={[['Email', 'required']]}
        />
    </>
);
