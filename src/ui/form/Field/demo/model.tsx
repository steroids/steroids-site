import * as React from 'react';
import Field from '@steroidsjs/core/ui/form/Field';

/**
 * Field с прокинутой моделью.
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <Field
            model={{
                attributes: [
                    {
                        field: 'PasswordField',
                        attribute: 'PasswordField',
                    },
                ],
            }}
        />
    </>
);
