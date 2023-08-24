/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import {gsap} from 'gsap';

import './AnimatedIcons.scss';
import {getClassSelector} from 'utils/utils';

const DECORATIONS = [
    'decoration1',
    'decoration1',
    'decoration2',
    'decoration3',
    'decoration4',
    'decoration5',
    'decoration1',
    'decoration6',
];

const ICON_ELEMENT_CLASS_NAME = 'animated-icon';
const ANIMATION_DURATION_SECONDS = 0.5;
const ANIMATION_EASE_TYPE = 'power2.out';
const OFFSET_DIVIDER = 10;

const animateIcon = (event, icon) => {
    const rect = icon.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / OFFSET_DIVIDER;
    const offsetY = (event.clientY - rect.top) / OFFSET_DIVIDER;

    gsap.to(icon, {
        x: offsetX,
        y: offsetY,
        duration: ANIMATION_DURATION_SECONDS,
        ease: ANIMATION_EASE_TYPE,
    });
};

const inanimateIcon = (icon) => {
    gsap.to(icon, {
        x: 0,
        y: 0,
        duration: ANIMATION_DURATION_SECONDS,
        ease: ANIMATION_EASE_TYPE,
    });
};

interface IAnimatedIconsProps {
    heroSectionRef?: React.MutableRefObject<HTMLElement>;
}

function AnimatedIcons(props: IAnimatedIconsProps) {
    const bem = useBem('AnimatedIcons');

    React.useEffect(() => {
        const icons = props.heroSectionRef?.current?.querySelectorAll(getClassSelector(ICON_ELEMENT_CLASS_NAME));

        const handleMouseMove = (e) => icons.forEach((icon) => animateIcon(e, icon));

        const handleMouseOut = () => icons.forEach((icon) => inanimateIcon(icon));

        props.heroSectionRef?.current?.addEventListener('mousemove', handleMouseMove);
        props.heroSectionRef?.current?.addEventListener('mouseout', handleMouseOut);

        return () => {
            props.heroSectionRef?.current?.removeEventListener('mousemove', handleMouseMove);
            props.heroSectionRef?.current?.removeEventListener('mouseout', handleMouseOut);
        };
    }, [bem, props.heroSectionRef]);

    return (
        <div className={bem.block()}>
            {DECORATIONS.map((decoration, decorationIndex) => (
                <Icon
                    key={decorationIndex}
                    name={decoration}
                    className={ICON_ELEMENT_CLASS_NAME}
                />
            ))}
        </div>
    );
}

export default AnimatedIcons;
