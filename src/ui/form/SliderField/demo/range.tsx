import * as React from 'react';
import SliderField from '@steroidsjs/core/ui/form/SliderField/SliderField';

/**
 * Обычный пример использования с заданным свойством isRange={true}, для задания промежутка значений.
 * @order 7
 * @col 4
 */

export default () => (
    <div style={{padding: '20px 30px'}}>
        <SliderField isRange />
    </div>
);
