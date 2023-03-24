import * as React from 'react';
import Form from '@steroidsjs/core/ui/form/Form/Form';
import DateField from '@steroidsjs/core/ui/form/DateField';
import InputField from '@steroidsjs/core/ui/form/InputField';

/**
 * Обычный пример использования с прокидыванием свойства layout='horizontal'.
 * @order 2
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='TestForm'
            useRedux
            syncWithAddressBar
            autoFocus
            layout='horizontal'
            size='large'
            fields={[
                {
                    component: InputField,
                    attribute: 'email',
                    label: 'Email',
                },
                {
                    component: () => <InputField />,
                    attribute: 'message',
                    label: 'Message',
                },
                {
                    component: DateField,
                    attribute: 'date',
                    label: 'Date',
                },
            ]}
            submitLabel='Submit'
            validators={[['Email', 'required']]}
        />
    </>
);
