import * as React from 'react';
import {Header} from '../../../../../../react/src/ui/layout';
import SliderField from '@steroidsjs/core/ui/form/SliderField/SliderField';

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
                <Header>
                    {__('Значение меняется при изменения значения слайдера в реальном времени: {counter}', {counter})}
                </Header>
            </div>
        </div>
    );
};
