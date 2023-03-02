import React from 'react';
import {Title} from '@steroidsjs/core/ui/typography';

/**
 * Simple title
 */

export default () => (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
        <Title template='h1' content='Text color' color='text-color' />
        <Title template='h2' content='Primary color' color='primary' />
        <Title template='h3' content='Secondary color' color='secondary' />
        <Title template='h4' content='Success color' color='success' />
        <Title template='h5' content='Danger color' color='danger' />
        <Title template='h6' content='Warning color' color='warning' />
        <Title template='h6' content='Info color' color='info' />
    </div>
);
