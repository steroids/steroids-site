import * as React from 'react';

import InputField from '@steroidsjs/core/ui/form/InputField/InputField';

/**
 * Подсказки.
 * @order 5
 * @col 3
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'row nowrap', columnGap: '30px'}}>
        <InputField label='Label' layout hint='Success message' successful />
        <InputField label='Label' errors={['Error 1 text', 'Error 2 text']} layout className='InputFieldView_hasError' hint='Error message' />
    </div>
);
