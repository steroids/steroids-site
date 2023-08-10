/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import Link from '@steroidsjs/core/ui/nav/Link';
import {ROUTE_ROOT} from 'constants/routes';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import {useComponents} from '@steroidsjs/core/hooks';

import './HeaderLogo.scss';

export default function HeaderLogo() {
    const bem = useBem('HeaderLogo');
    const {locale} = useComponents();

    return (
        <Link
            toRoute={ROUTE_ROOT}
            toRouteParams={{
                [LANGUAGE_ROUTE_PARAM]: locale.language,
            }}
            className={bem.block()}
        >
            <Icon
                name='logo'
                className={bem.element('icon')}
            />
            <p className={bem.element('title')}>
                {__('Steroids')}
            </p>
        </Link>
    );
}
