import * as React from 'react';
import Form from '@steroidsjs/core/ui/form/Form/Form';
import DateField from '@steroidsjs/core/ui/form/DateField';
import DateTimeField from '@steroidsjs/core/ui/form/DateTimeField';
import TextField from '@steroidsjs/core/ui/form/TextField';
import InputField from '@steroidsjs/core/ui/form/InputField';

/**
 * Обычный пример использования Form.
 * @order 1
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='TestForm'
            useRedux
            syncWithAddressBar
            autoFocus
            layout='default'
            size='large'
            fields={[
                {
                    component: InputField,
                    attribute: 'email',
                    label: 'Email',
                },
                {
                    component: TextField,
                    attribute: 'message',
                    label: 'Message',
                },
                {
                    component: DateField,
                    attribute: 'date',
                    label: 'Date',
                },
                {
                    component: DateTimeField,
                    attribute: 'startTime',
                    label: 'Start time',
                },
            ]}
            submitLabel='Submit'
            validators={[['Email', 'required']]}
        />
    </>
);
