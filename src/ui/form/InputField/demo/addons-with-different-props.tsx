import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Варианты InputField с разными пропами
 * @order 7
 * @col 3
 */

export default () => (
    <div>
        <div>
            <InputField
                placeholder='Placeholder'
                addonBefore="https://"
                addonAfter=".com"
                showClear
                label="Small disabled"
                size="sm"
                disabled
                layout
            />
            <InputField
                placeholder='Placeholder'
                addonBefore="https://"
                addonAfter=".com"
                showClear
                label="Medium default"
                size="md"
                layout
            />
            <InputField
                placeholder='Placeholder'
                addonBefore="https://"
                addonAfter=".com"
                showClear
                label='Large with errors'
                size="lg"
                layout
                errors={['Error 1 text', 'Error 2 text']}
                className='InputFieldView_hasError'
            />
        </div>
    </div>
);
