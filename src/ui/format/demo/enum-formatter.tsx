import * as React from 'react';

import EnumFormatter from '@steroidsjs/core/ui/format/EnumFormatter';

export default () => (
    <>
        <EnumFormatter
            items={[
                {id: 1, label: 'one'},
                {id: 2, label: 'two'},
                {id: 3, label: 'three'},
            ]}
            value={2}

        />
    </>
);
