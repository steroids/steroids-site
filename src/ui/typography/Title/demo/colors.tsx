import React from 'react';
import {Title} from '@steroidsjs/core/ui/typography';

/**
 * Colors for title
 */

export default () => (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
        <Title
            type='h1'
            content='Text color'
            color='text-color'
        />
        <Title
            type='h2'
            content='Primary color'
            color='primary'
        />
        <Title
            type='h3'
            content='Secondary color'
            color='secondary'
        />
        <Title
            type='h4'
            content='Success color'
            color='success'
        />
        <Title
            type='h5'
            content='Danger color'
            color='danger'
        />
        <Title
            type='h6'
            content='Warning color'
            color='warning'
        />
        <Title
            type='h6'
            content='Info color'
            color='info'
        />
    </div>
);
