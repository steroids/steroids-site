import * as React from 'react';
import TextField from '@steroidsjs/core/ui/form/TextField';

/**
 * По-умлочанию TextField имеет 3 заданных размера.
 * @order 7
 * @col 12
 */

export default () => (
    <>
        <div style={{display: 'flex', flexFlow: 'row wrap', columnGap: '30px'}}>
            <div className='col'>
                <TextField
                    label="Small"
                    size='sm'
                    placeholder='Small'
                    showClose
                />
            </div>
            <div className='col'>
                <TextField
                    label="Medium"
                    size='md'
                    placeholder='Medium'
                    showClose
                />
            </div>
            <div className='col'>
                <TextField
                    label="Large"
                    size='lg'
                    placeholder='Large'
                    showClose
                />
            </div>
        </div>
    </>
);
