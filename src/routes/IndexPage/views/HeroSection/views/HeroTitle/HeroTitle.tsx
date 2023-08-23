import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import AnimatedLogo from 'shared/AnimatedLogo';
import {useToggleAnimation} from 'hooks/useHoverAnimation';

import './HeroTitle.scss';

export default function HeroTitle() {
    const bem = useBem('HeroTitle');

    const {isAnimationToggled, onMouseEnter, onMouseLeave} = useToggleAnimation();

    return (
        <h1
            className={bem.block()}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <span className={bem.element('letters')}>
                Ster
            </span>
            <AnimatedLogo
                isToggled={isAnimationToggled}
                className={bem.element('icon')}
            />
            <span className={bem.element('letters')}>
                ids
            </span>
        </h1>
    );
}
