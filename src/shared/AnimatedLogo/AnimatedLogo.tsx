import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';

import './AnimatedLogo.scss';

interface IAnimatedLogoProps {
    className?: string;
    isToggled: boolean;
}

export default function AnimatedLogo(props: IAnimatedLogoProps) {
    const bem = useBem('AnimatedLogo');

    return (
        <div className={bem(
            bem.block({
                isToggled: props.isToggled,
            }),
            props.className,
        )}
        >
            <Icon
                name="logo-foreground"
                className={bem.element('icon', 'foreground')}
            />
            <Icon
                name="logo-background"
                className={bem.element('icon', 'background')}
            />

        </div>
    );
}
