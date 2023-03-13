import * as React from 'react';

import {PasswordField} from '@steroidsjs/core/ui/form';

/**
 * С кнопкой для просмотра содержания.
 * @order 7
 * @col 3
 */

export default () => (
    <>
        <PasswordField label='Security' security showClear placeholder='Password' />
    </>
);
