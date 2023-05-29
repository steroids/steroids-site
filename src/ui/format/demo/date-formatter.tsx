import * as React from 'react';

import DateFormatter from '@steroidsjs/core/ui/format/DateFormatter';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <DateFormatter
                value='2018-05-04'
            />
        </Text>
    </>
);
