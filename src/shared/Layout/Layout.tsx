import * as React from 'react';

import {useBem} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_OK, STATUS_LOADING} from '@steroidsjs/core/hooks/useLayout';

import {Notifications} from '@steroidsjs/core/ui/layout';
import Header from '@steroidsjs/core/ui/layout/Header';

import './Layout.scss';
import {ROUTE_ROOT} from '../../routes';

export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');

    const {status} = useLayout();

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    return (
        <div className={bem.block()}>
            <Header
                logo={{
                    title: 'The best framework Steroids',
                }}
                nav={{
                    items: ROUTE_ROOT,
                }}
            />
            <div className={bem.element('content')}>
                <Notifications />
                {props.children}
            </div>
        </div>
    );
}
