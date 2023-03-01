import React from 'react';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Simple title
 */

export default () => (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
        <Text template='body1' content='Paragraph' />
        <Text template='span' content='Span' />
        <Text template='boldSpan' content='Bold span' />
    </div>
);
