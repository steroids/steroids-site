import * as React from 'react';
import SliderField from '@steroidsjs/core/ui/form/SliderField/SliderField';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Использования свойства onChange для изминения значения счетчика.
 * @order 8
 * @col 6
 */

export default () => {
    const [counter, setCounter] = React.useState('0');
    return (
        <div style={{padding: '20px 30px'}}>
            <SliderField
                onChange={value => setCounter(value)}
            />
            <div>
                <Text>
                    {__('Значение меняется при изменения значения слайдера в реальном времени: {counter}', {counter})}
                </Text>
            </div>
        </div>
    );
};
