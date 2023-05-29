import * as React from 'react';

import BooleanFormatter from '@steroidsjs/core/ui/format/BooleanFormatter';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <BooleanFormatter
                value='test'
            />
        </Text>
    </>
);
