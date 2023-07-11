import * as React from 'react';

import Format from '@steroidsjs/core/ui/format/Format';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <Format
                item={{label: 'First Item'}}
                attribute='label'
            />
        </Text>
    </>
);
