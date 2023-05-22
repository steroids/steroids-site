import * as React from 'react';
import CopyToClipboard from '@steroidsjs/core/ui/content/CopyToClipboard';

/**
 * Basic
 */

export default () => (
    <CopyToClipboard
        value="Steroids.js"
        notification="'Steroids.js' has been copied"
    />
);
