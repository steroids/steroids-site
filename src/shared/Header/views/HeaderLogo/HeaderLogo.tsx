/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {ROUTE_ROOT} from 'constants/routes';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Link from '@steroidsjs/core/ui/nav/Link';
import {useComponents} from '@steroidsjs/core/hooks';
import AnimatedLogo from 'shared/AnimatedLogo';
import {useToggleAnimation} from 'hooks/useToggleAnimation';

import './HeaderLogo.scss';

export default function HeaderLogo() {
    const bem = useBem('HeaderLogo');
    const {locale} = useComponents();

    const {isAnimationToggled, onMouseEnter, onMouseLeave} = useToggleAnimation();

    return (
        <div
            className={bem.block()}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                toRoute={ROUTE_ROOT}
                toRouteParams={{
                    [LANGUAGE_ROUTE_PARAM]: locale.language,
                }}
                className={bem.element('link')}
            >
                <AnimatedLogo
                    isToggled={isAnimationToggled}
                    className={bem.element('icon')}
                />
                <p className={bem.element('title')}>
                    {__('Steroids')}
                </p>
            </Link>
        </div>
    );
}
