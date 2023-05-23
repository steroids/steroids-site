import * as React from 'react';
import SliderField from '@steroidsjs/core/ui/form/SliderField/SliderField';

/**
 * Обработка ошибок c лейблом.
 * @order 5
 * @col 4
 */

export default () => (
    <div style={{padding: '20px 30px 10px'}}>
        <SliderField
            label='Errors'
            errors={['Error 1 text', 'Error 2 text']}
        />
    </div>
);
