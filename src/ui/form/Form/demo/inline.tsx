import * as React from 'react';
import {DropDownField} from '@steroidsjs/core/ui/form';
import Form from '@steroidsjs/core/ui/form/Form/Form';
import DateField from '@steroidsjs/core/ui/form/DateField';
import InputField from '@steroidsjs/core/ui/form/InputField';

/**
 * Обычный пример использования с Form в одну строку с использованием layout='inline'.
 * @order 3
 * @col 12
 */

export default () => (
    <>
        <Form
            formId='TestForm'
            useRedux
            syncWithAddressBar
            autoFocus
            layout='inline'
            size='large'
            fields={[
                {
                    component: DropDownField,
                    attribute: 'email',
                    layout: true,
                },
                {
                    component: InputField,
                    attribute: 'message',
                },
                {
                    component: DateField,
                    attribute: 'date',
                },
            ]}
            submitLabel='Submit'
            validators={[['Email', 'required']]}
        />
    </>
);
