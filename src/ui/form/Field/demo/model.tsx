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
            label='Model field'
            model={{
                attributes: [
                    {
                        field: 'InputField',
                    },
                ],
            }}
        />
    </>
);
