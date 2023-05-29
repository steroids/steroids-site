import * as React from 'react';

import DateTimeFormatter from '@steroidsjs/core/ui/format/DateTimeFormatter';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <DateTimeFormatter
                value='2018-05-04 16:15:00'
            />
        </Text>
    </>
);
