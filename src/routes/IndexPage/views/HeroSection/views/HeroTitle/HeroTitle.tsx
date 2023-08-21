import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import AnimatedLogo from 'shared/AnimatedLogo';

import './HeroTitle.scss';

const ANIMATION_TOGGLED_BY_DEFAULT = false;

export default function HeroTitle() {
    const bem = useBem('HeroTitle');
    const [isToggled, setIsToggled] = React.useState(ANIMATION_TOGGLED_BY_DEFAULT);

    return (
        <h1
            className={bem.block()}
            onMouseEnter={() => setIsToggled(true)}
            onMouseLeave={() => setIsToggled(false)}
        >
            <span className={bem.element('letters')}>
                Ster
            </span>
            <AnimatedLogo
                isToggled={isToggled}
                className={bem.element('icon')}
            />
            <span className={bem.element('letters')}>
                ids
            </span>
        </h1>
    );
}
