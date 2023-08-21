import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import {gsap} from 'gsap';

import './AnimatedIcons.scss';

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

const ICON_ELEMENT_CLASS = 'animated-icon';

export default function AnimatedIcons() {
    const bem = useBem('AnimatedIcons');

    React.useEffect(() => {
        const heroSection = document.querySelector('.HeroSection');
        const icons = heroSection.querySelectorAll(`.${ICON_ELEMENT_CLASS}`);

        const handleMouseMove = (e) => {
            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const offsetX = (e.clientX - rect.left) / 10;
                const offsetY = (e.clientY - rect.top) / 10;

                gsap.to(icon, {
                    x: offsetX,
                    y: offsetY,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
        };

        const handleMouseOut = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
        };

        heroSection.addEventListener('mousemove', handleMouseMove);
        heroSection.addEventListener('mouseout', handleMouseOut);

        return () => {
            heroSection.removeEventListener('mousemove', handleMouseMove);
            heroSection.removeEventListener('mouseout', handleMouseOut);
        };
    }, [bem]);

    return (
        <div className={bem.block()}>
            {DECORATIONS.map((decoration, decorationIndex) => (
                <Icon
                    key={decorationIndex}
                    name={decoration}
                    className={ICON_ELEMENT_CLASS}
                />
            ))}
        </div>
    );
}
