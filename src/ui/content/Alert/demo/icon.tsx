import * as React from 'react';
import {Alert} from '@steroidsjs/core/ui/content';

import './alert-demo.scss';

/**
 * Header with icon and without icon
 * @order 1
 * @col 12
 */

export default () => (
    <div className="alert-demo">
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Alert
                type='success'
                message='Success Tips'
            />
            <Alert
                type='info'
                message='Information Notes'
            />
            <Alert
                type='warning'
                message='Warning'
                showClose
            />
            <Alert
                type='error'
                message='Error'
            />
            <Alert
                type="default"
                message="Default"
            />
        </div>
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Alert
                showIcon={false}
                type='success'
                message='Success Tips'
            />
            <Alert
                showIcon={false}
                type='info'
                message='Information Notes'
            />
            <Alert
                showIcon={false}
                type='warning'
                message='Warning'
                showClose
            />
            <Alert
                showIcon={false}
                type='error'
                message='Error'
            />
            <Alert
                type="default"
                message="Default"
                showClose
            />
        </div>
    </div>
);
