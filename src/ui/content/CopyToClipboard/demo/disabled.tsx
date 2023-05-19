import * as React from 'react';
import CopyToClipBoard from '@steroidsjs/core/ui/content/CopyToClipboard';

/**
 * Disabled
 */

export default () => (
    <CopyToClipBoard
        value="Steroids.js"
        notification="'Steroids.js' has been copied"
        disabled
    />
);
