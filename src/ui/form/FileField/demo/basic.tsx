import {FileField} from '@steroidsjs/core/ui/form';
import ImageField from '@steroidsjs/core/ui/form/ImageField';
import * as React from 'react';

/**
 * Обычный пример использования FileField.
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'grid', gridGap: '10px'}}>
        <FileField backendUrl={process.env.APP_BACKEND_URL + '/api/v1/file/upload-photo'} />
        <FileField
            backendUrl={process.env.APP_BACKEND_URL + '/api/v1/file/upload-photo'}
            imagesOnly
        />
        <FileField
            backendUrl={process.env.APP_BACKEND_URL + '/api/v1/file/upload-photo'}
            imagesOnly
            filesLayout='wall'
        />
        <ImageField backendUrl='/api/v1/file/upload-photo' />
    </div>
);
