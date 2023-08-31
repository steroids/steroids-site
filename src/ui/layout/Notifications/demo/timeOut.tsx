import * as React from 'react';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';
import {showNotification} from '@steroidsjs/core/actions/notifications';
import Button from '@steroidsjs/core/ui/form/Button';

/**
 * Время самостоятельного пропадания уведомления в миллисекундах
 * @order 2
 * @col 6
 */

const times = [1, 3, 5, 10];

export default () => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', flexFlow: 'column'}}>
            {times.map((time: number) => (
                <Button
                    key={time}
                    color='primary'
                    label={__('Через {secondsCount} {secondsCount, plural, one{секунду} few{секунды} other{секунд}} пропадет уведомление',
                        {secondsCount: time})}
                    onClick={() => {
                        dispatch(
                            showNotification(
                                __('{secondsCount} {secondsCount, plural, one{секунду} few{секунды} other{секунд}}', {secondsCount: time}),
                                'info',
                                {position: 'bottom-right', timeOut: time * 1000},
                            ),
                        );
                    }}
                    style={{margin: '10px 0'}}
                />
            ))}
        </div>
    );
};
