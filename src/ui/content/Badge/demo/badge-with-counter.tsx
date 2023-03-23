import * as React from 'react';
import Badge from '@steroidsjs/core/ui/content/Badge';

/**
 * Badge component with counter
 */

export default () => (
    <div style={{display: 'grid', gridTemplateColumns: '1fr', gridGap: '20px'}}>
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Badge
                roundingStyle="squarer"
                message="Badge with chip"
                size='lg'
                counter={{isEnable: true, content: 5}}
            />
            <Badge
                roundingStyle="rounder"
                message="Badge with chip"
                size='lg'
                counter={{isEnable: true, content: 5}}
                showClose
            />
        </div>
    </div>
);
