import {FileField} from '@steroidsjs/core/ui/form';
import * as React from 'react';

/**
 * FileField для загрузки картинок
 * @order 1
 * @col 6
 */

export default () => (
    <div>
        <FileField
            backendUrl="/api/v1/file/upload-photo"
            imagesOnly
        />
    </div>
);
