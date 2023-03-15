import * as React from 'react';
import Badge from '@steroidsjs/core/ui/content/Badge';

/**
 * Badge component with different sizes of text inside
 */

export default () => (
    <div style={{display: 'grid', gridTemplateColumns: '1fr', gridGap: '20px'}}>
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Badge
                type='primary'
                roundingStyle="squarer"
                message="Primary"
                size='large'
            />
            <Badge
                type='secondary'
                roundingStyle="rounder"
                message="Secondary"
                size='large'
                showClose
            />
            <Badge
                type='success'
                roundingStyle="squarer"
                message="Success"
                size='medium'
            />
            <Badge
                type='danger'
                roundingStyle="rounder"
                message="Danger"
                size='medium'
                showClose
            />
            <Badge
                type='warning'
                roundingStyle="squarer"
                message="Warning"
                size='small'
                showClose
            />
            <Badge
                type='info'
                roundingStyle="rounder"
                message="Info"
                size='small'
                showClose
            />
        </div>
    </div>
);
