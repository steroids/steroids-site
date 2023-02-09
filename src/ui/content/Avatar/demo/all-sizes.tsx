import * as React from 'react';
import {Avatar} from '@steroidsjs/core/ui/content/';

/**
 * All sizes with title and online status
 */

export default function () {
    return (
        <div style={{display: 'grid', }}>
            <div style={{display: 'grid', gridGap: '20px'}}>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="small" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' />
                    <Avatar size="small" title='Kozhin Dev' />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="small" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' status />
                    <Avatar size="small" title='Kozhin Dev' status />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="small" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story />
                    <Avatar size="small" title='Kozhin Dev' story />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="small" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story status />
                    <Avatar size="small" title='Kozhin Dev' story status />
                </div>
            </div>
            <div style={{display: 'grid', gridGap: '20px', marginTop: '30px'}}>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="middle" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' />
                    <Avatar size="middle" title='Kozhin Dev' />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="middle" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' status />
                    <Avatar size="middle" title='Kozhin Dev' status />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="middle" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story />
                    <Avatar size="middle" title='Kozhin Dev' story />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="middle" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story status />
                    <Avatar size="middle" title='Kozhin Dev' story status />
                </div>
            </div >
            <div style={{display: 'grid', gridGap: '20px', marginTop: '30px', }}>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' />
                    <Avatar size="large" title='Kozhin Dev' />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' status />
                    <Avatar size="large" title='Kozhin Dev' status />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story />
                    <Avatar size="large" title='Kozhin Dev' story />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story status />
                    <Avatar size="large" title='Kozhin Dev' story status />
                </div>
            </div >
            <div style={{display: 'grid', gridGap: '20px', marginTop: '30px', }}>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="x-large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' />
                    <Avatar size="x-large" title='Kozhin Dev' />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="x-large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' status />
                    <Avatar size="x-large" title='Kozhin Dev' status />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="x-large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story />
                    <Avatar size="x-large" title='Kozhin Dev' story />
                </div>
                <div style={{display: 'flex', gridGap: '10px'}}>
                    <Avatar size="x-large" title='Kozhin Dev' src='https://i.ibb.co/1fWbXCt/F-1.png' story status />
                    <Avatar size="x-large" title='Kozhin Dev' story status />
                </div>
            </div >
        </div>
    );
}