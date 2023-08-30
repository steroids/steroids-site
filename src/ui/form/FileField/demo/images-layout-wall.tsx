import {FileField} from '@steroidsjs/core/ui/form';
import {FilesLayout} from '@steroidsjs/core/ui/form/FileField/FileField';
import * as React from 'react';

/**
 * FileField для загрузки картинок, отображение в стиле wall
 * @order 1
 * @col 6
 */

export default () => (
    <div>
        <FileField
            backendUrl="/api/v1/file/upload-photo"
            filesLayout={FilesLayout.wall}
            imagesOnly
        />
    </div>
);
