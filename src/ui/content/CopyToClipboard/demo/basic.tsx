import * as React from 'react';
import CopyToClipBoard from '@steroidsjs/core/ui/content/CopyToClipboard';

/**
 * Basic
 */

export default () => (
    <CopyToClipBoard
        value="Steroids.js"
        notification="'Steroids.js' has been copied"
    />
);
