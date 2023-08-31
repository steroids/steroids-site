import * as React from 'react';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';
import {showNotification} from '@steroidsjs/core/actions/notifications';
import Button from '@steroidsjs/core/ui/form/Button';

/**
 * Все позиции уведомлений
 * @order 3
 * @col 12
 */

const positions = {
    tr: 'top-right',
    tl: 'top-left',
    br: 'bottom-right',
    bl: 'bottom-left',
};

export default () => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'grid', gridGap: '10px', justifyContent: 'center'}}>
            {Object.values(positions).map((position: string) => (
                <Button
                    key={position}
                    color='basic'
                    label={__('Позиция') + ' ' + position}
                    onClick={() => {
                        dispatch(showNotification(position, 'success', {position, timeOut: 1000}));
                    }}
                />
            ))}
        </div>
    );
};
