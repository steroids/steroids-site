import * as React from 'react';

import FileSize from '@steroidsjs/core/ui/format/FileSize';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <FileSize
                value={23400}
                showZero
            />
        </Text>
    </>
);
