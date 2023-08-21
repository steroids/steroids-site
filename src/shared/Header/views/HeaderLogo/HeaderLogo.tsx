/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {ROUTE_ROOT} from 'constants/routes';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import Link from '@steroidsjs/core/ui/nav/Link';
import {useComponents} from '@steroidsjs/core/hooks';

import './HeaderLogo.scss';
import AnimatedLogo from 'shared/AnimatedLogo';

const ANIMATION_TOGGLED_BY_DEFAULT = false;

export default function HeaderLogo() {
    const bem = useBem('HeaderLogo');
    const {locale} = useComponents();
    const [isToggled, setIsToggled] = React.useState(ANIMATION_TOGGLED_BY_DEFAULT);

    return (
        <div
            className={bem.block()}
            onMouseEnter={() => setIsToggled(true)}
            onMouseLeave={() => setIsToggled(false)}
        >
            <Link
                toRoute={ROUTE_ROOT}
                toRouteParams={{
                    [LANGUAGE_ROUTE_PARAM]: locale.language,
                }}
                className={bem.element('link')}
            >
                <AnimatedLogo
                    isToggled={isToggled}
                    className={bem.element('icon')}
                />
                <p className={bem.element('title')}>
                    {__('Steroids')}
                </p>
            </Link>
        </div>
    );
}
