import * as React from 'react';
import InputField from '@steroidsjs/core/ui/form/InputField';
import Form from '@steroidsjs/core/ui/form/Form';
import Button from '@steroidsjs/core/ui/form/Button';
import ReCaptchaField from '@steroidsjs/core/ui/form/ReCaptchaField';

/**
 * Обычный пример использования ReCaptchaField в Form.
 * @order 1
 * @col 4
 */

export default () => (
    <>
        <Form
            formId='CaptchaForm'
        >
            <InputField
                label='Label'
                attribute='text'
                required
            />
            <ReCaptchaField
                attribute='token'
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />
            <Button
                type='submit'
                label='Submit'
            />
        </Form>
    </>
);
