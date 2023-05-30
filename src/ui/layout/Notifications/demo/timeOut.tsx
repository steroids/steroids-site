import * as React from 'react';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';
import {showNotification} from '@steroidsjs/core/actions/notifications';
import Button from '@steroidsjs/core/ui/form/Button';

/**
 * Время самостоятельного пропадания уведомления в миллисекундах
 * @order 2
 * @col 6
 */

const times = {
    1: 1000,
    3: 3000,
    5: 5000,
    10: 10000,
};

export default () => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', flexFlow: 'column'}}>
            {Object.values(times).map((time: number) => (
                <Button
                    key={time}
                    color='primary'
                    label={`Через ${time / 1000} секунд пропадет уведомление`}
                    onClick={() => {
                        dispatch(
                            showNotification(
                                `${time / 1000} секунд`, 'info',
                                {position: 'bottom-right', timeOut: time},
                            ),
                        );
                    }}
                    style={{margin: '10px 0'}}
                />
            ))}
        </div>
    );
};
