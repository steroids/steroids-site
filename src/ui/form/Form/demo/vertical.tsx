import * as React from 'react';
import Form from '@steroidsjs/core/ui/form/Form/Form';
import InputField from '@steroidsjs/core/ui/form/InputField';

/**
 * Обычный пример использования с прокидыванием свойства layout='vertical'.
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
            layout='vertical'
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
            ]}
            submitLabel='Submit'
            validators={[['Email', 'required']]}
        />
    </>
);
