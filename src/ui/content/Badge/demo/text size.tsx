import * as React from 'react';
import Badge from '@steroidsjs/core/ui/content/Badge';

/**
 * Badge component with different sizes of text inside
 */

export default function () {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px'}}>
            <div style={{display: 'grid', gridGap: '20px'}}>
                <Badge type="secondary" borderType="squarer" message="Badge" />
            </div>

        </div>
    );
}
