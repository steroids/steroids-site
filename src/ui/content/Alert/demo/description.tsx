import * as React from 'react';
import {Alert} from '@steroidsjs/core/ui/content';

/**
 * Header+text with icon
 * Header+text without icon
 * @order 2
 * @col 12
 */

export default () => (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px'}}>
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Alert
                type='success'
                message='Success Tips'
                description='Detailed'
            />
            <Alert
                type='info'
                message='Information Notes'
                description='Additional description and information about copywriting.'
            />
            <Alert
                type='warning'
                message='Warning'
                showClose
                description='This is a warning notice about copywriting.'
            />
            <Alert
                type='error'
                message='Error'
                description='This is an error message about copywriting.'
            />
            <Alert
                type="default"
                message="Default"
                description="Detailed description and advice about successful copywriting.
                    Detailed description and advice about successful copywriting.Detailed description and advice about successful"
                showClose
            />
        </div>
        <div style={{display: 'grid', gridGap: '20px'}}>
            <Alert
                showIcon={false}
                type='success'
                message='Success Tips'
                description='Detailed description and advice about successful copywriting.'
            />
            <Alert
                showIcon={false}
                type='info'
                message='Information Notes'
                description='Additional description and information about copywriting.'
            />
            <Alert
                showIcon={false}
                type='warning'
                message='Warning'
                showClose
                description='This is a warning notice about copywriting.'
            />
            <Alert
                showIcon={false}
                type='error'
                message='Error'
                description='This is an error message about copywriting.'
            />
            <Alert
                showIcon={false}
                type="default"
                message="Default"
                description="Detailed description and advice about successful copywriting.
                    Detailed description and advice about successful copywriting.Detailed description and advice about successful"
                showClose
            />
        </div>
    </div>
);
