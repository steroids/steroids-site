import ImageField from '@steroidsjs/core/ui/form/ImageField';
import * as React from 'react';

/**
 * Обычный пример использования ImageField.
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'grid', gridGap: '10px'}}>
        <ImageField backendUrl='/api/v1/file-test' />
    </div>
);
