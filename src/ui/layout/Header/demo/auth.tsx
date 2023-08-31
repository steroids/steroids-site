import * as React from 'react';
import Header from '@steroidsjs/core/ui/layout/Header';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

import './header-demo.scss';
import {NAV_ITEMS} from './basic';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Auth modal'
            onClose={props.onClose}
            {...props}
            id={props.modalId}
        >
            <div style={{marginBottom: '20px'}}>
                Try to login here :
            </div>
        </Modal>
    );
}

const voidFunction = () => { };

export const HEADER_MENU_ITEMS = [
    {label: __('Профиль'), icon: 'user', onClick: voidFunction},
    {label: __('Настройки'), icon: 'setting_line', onClick: voidFunction},
    {label: __('Выйти'), icon: 'menu_left', onClick: voidFunction},
];

/**
 * Пример использования Header с auth
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{display: 'flex', flexFlow: 'column wrap', rowGap: 10}}>
        <Header
            className='header-auth'
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: NAV_ITEMS,
                layout: 'navbar',
            }}
            authParams={{
                isAuth: true,
                modal: DemoModal,
            }}
        />
        <Header
            className='header-auth'
            logo={{icon: 'kozhinDev', title: 'KozhinDev'}}
            nav={{
                items: NAV_ITEMS,
                layout: 'navbar',
            }}
            user={{
                name: 'KozhinDev',
                avatar: {
                    title: 'K D',
                },
                menu: {
                    items: HEADER_MENU_ITEMS,
                    dropDownProps: {
                        position: 'bottom',
                        closeMode: 'click-any',
                    },
                },
            }}
        />
    </div>
);
