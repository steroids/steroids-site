import * as React from 'react';
import SliderField from '@steroidsjs/core/ui/form/SliderField/SliderField';
import {Text} from '@steroidsjs/core/ui/typography';

/**
 * Использования свойства onAfterChange для изминения значения счетчика после отпускания tip'а у слайдера.
 * @order 9
 * @col 6
 */

export default () => {
    const [counter, setCounter] = React.useState('0');
    return (
        <div style={{padding: '20px 30px'}}>
            <SliderField
                onAfterChange={value => setCounter(value)}
            />
            <div>
                <Text>
                    {__('Значение слайдера: {counter}', {counter})}
                </Text>
            </div>
        </div>
    );
};
