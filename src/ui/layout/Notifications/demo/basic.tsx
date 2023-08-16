import * as React from 'react';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';
import {showNotification} from '@steroidsjs/core/actions/notifications';
import Button from '@steroidsjs/core/ui/form/Button';

/**
 * Все типы уведомлений
 * @order 1
 * @col 6
 */

export default () => {
    const dispatch = useDispatch();
    const notifications = {
        success: 'Success notification',
        error: 'Error notification',
        warning: 'Warning notification',
        info: 'Info notification',
    };

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
            }}
        >
            {Object.keys(notifications).map((level: string) => (
                [].concat(notifications[level] || [])
                    .map(message => (
                        <Button
                            key={level}
                            color={level}
                            label={`${__('Уведомление типа')} "${level}"`}
                            onClick={() => {
                                dispatch(showNotification(message, level));
                            }}
                            style={{margin: '10px 0'}}
                        />
                    ))
            ))}
        </div>
    );
};
