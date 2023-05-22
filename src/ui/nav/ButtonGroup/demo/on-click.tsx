import * as React from 'react';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {useDispatch} from '@steroidsjs/core/hooks';
import {showNotification} from '@steroidsjs/core/actions/notifications';

/**
 * Вызов функции onClick
 * @order 1
 * @col 6
 */

const items = [
    {
        id: 1,
        label: 'First',
    },
    {
        id: 2,
        label: 'Second',
    },
    {
        id: 3,
        label: 'Third',
    },
    {
        id: 4,
        label: 'Fourth',
    },
    {
        id: 5,
        label: 'Five',
    },
    {
        id: 6,
        label: 'Six',
    },
];

export default () => {
    const [activeTab, setActiveTab] = React.useState(items[0].id);
    const dispatch = useDispatch();

    const onClick = (id: number) => {
        setActiveTab(id);
        dispatch(showNotification(`Click on button with id ${id}`));
    };

    return (
        <>
            <div style={{marginBottom: '20px'}}>
                <ButtonGroup
                    items={items}
                    onClick={onClick}
                    activeButton={activeTab}
                />
            </div>
            <ButtonGroup
                items={items}
                onClick={onClick}
                activeButton={activeTab}
                buttonProps={{
                    outline: true,
                }}
            />
        </>
    );
};
