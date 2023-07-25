import * as React from 'react';

import {MoneyFormatter} from '@steroidsjs/core/ui/format';
import {Text} from '@steroidsjs/core/ui/typography';

export default () => (
    <>
        <Text>
            <MoneyFormatter
                value={300}
                currency='rub'
            />
        </Text>
    </>
);
