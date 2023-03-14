import React from 'react';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Colors for text
 */

export default () => (
    <div>
        <Text
            content='Text color'
            color='text-color'
        />
        <Text
            content='Primary color'
            color='primary'
        />
        <Text
            content='Secondary color'
            color='secondary'
        />
        <Text
            content='Success color'
            color='success'
        />
        <Text
            content='Danger color'
            color='danger'
        />
        <Text
            content='Warning color'
            color='warning'
        />
        <Text
            content='Info color'
            color='info'
        />
    </div>
);
