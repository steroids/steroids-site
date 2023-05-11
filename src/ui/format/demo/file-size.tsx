import * as React from 'react';

import FileSize from '@steroidsjs/core/ui/format/FileSize';

export default () => (
    <>
        <FileSize
            value={23400}
            showZero
        />
    </>
);
