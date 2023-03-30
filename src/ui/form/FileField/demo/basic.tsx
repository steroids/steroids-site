import {FileField} from '@steroidsjs/core/ui/form';
import * as React from 'react';

/**
 * Обычный пример использования FileField.
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'grid', gridGap: '10px'}}>
        <FileField backendUrl='/api/v1/file-test' />
    </div>
);
