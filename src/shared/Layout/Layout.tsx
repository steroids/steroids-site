import * as React from 'react';

import {useBem} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_OK, STATUS_LOADING} from '@steroidsjs/core/hooks/useLayout';
import Portal from '@steroidsjs/core/ui/layout/Portal';
import ModalPortal from '@steroidsjs/core/ui/modal/ModalPortal';

import {Notifications} from '@steroidsjs/core/ui/layout';
import Header from 'shared/Header';

import './Layout.scss';
import Footer from 'shared/Footer';

export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');

    const {status} = useLayout();

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    return (
        <div className={bem.block()}>
            <Header />
            <main className={bem.element('content')}>
                <Notifications />
                {props.children}
                <ModalPortal />
                <Portal />
            </main>
            <Footer />
        </div>
    );
}
