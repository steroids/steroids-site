import React from 'react';
import {Title} from '@steroidsjs/core/ui/typography';

/**
 * Simple title
 */

export default () => (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
        <Title template='h1' content='h1. Heading Title' />
        <Title template='h2' content='h2. Heading Title' />
        <Title template='h3' content='h3. Heading Title' />
        <Title template='h4' content='h4. Heading Title' />
        <Title template='h5' content='h5. Heading Title' />
        <Title template='h6' content='h6. Heading Title' />
    </div>
);
