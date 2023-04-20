import {FileField} from '@steroidsjs/core/ui/form';
import * as React from 'react';

/**
 * FileField для загрузки картинок, отображение в стиле wall
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{minWidth: '500px'}}>
        <FileField
            backendUrl="/api/v1/file/upload-photo"
            filesLayout='wall'
            imagesOnly
        />
    </div>
);
