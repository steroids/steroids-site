import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Auth modal'
            onClose={props.onClose}
            {...props}
            id={props.modalId}
        >
            <div style={{marginBottom: '20px'}}>
                Try to login here :)
            </div>
        </Modal>
    );
}

const voidFunction = () => { };

const navItems = [
    {
        id: 1,
        label: 'О нас',
    },
    {
        id: 2,
        label: 'Услуги',
    },
    {
        id: 3,
        label: 'Контакты',
        disabled: true,
    },
];

/**
 * Пример использования Header с auth
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column nowrap', rowGap: 10}}>
        <Header
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: navItems,
                layout: 'navbar',
            }}
            authParams={{
                isAuth: true,
                toRoute: 'root',
                modal: DemoModal,
            }}
        />
        <Header
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: navItems,
                layout: 'navbar',
            }}
            user={{
                name: 'KozhinDev',
                avatar: {
                    title: 'K D',
                },
                menu: {
                    items: [
                        {label: 'Профиль', icon: 'user', onClick: voidFunction},
                        {label: 'Настройки', icon: 'setting_line', onClick: voidFunction},
                        {label: 'Выйти', icon: 'menu_left', onClick: voidFunction},
                    ],
                    dropDownProps: {
                        position: 'bottom',
                        closeMode: 'click-any',
                    },
                },
            }}
        />
    </div>
);
