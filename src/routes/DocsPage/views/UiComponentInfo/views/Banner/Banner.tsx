import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';

import './Banner.scss';
import {Icon} from '@steroidsjs/core/ui/content';

interface IBannerProps {
    componentName: string,
    description: string;
}

function Banner(props: IBannerProps) {
    const bem = useBem('Banner');

    return (
        <div className={bem.block()}>
            <div className={bem.element('frame')}>
                <Title
                    className={bem.element('title')}
                    content={props.componentName}
                />
                <Text
                    className={bem.element('description')}
                    content={props.description}
                />
                <Icon
                    className={bem.element('background')}
                    name='banner-frame'
                />
            </div>
            <div className={bem.element('picture')}>
                <img
                    className={bem.element('picture-img')}
                    src={`/images/banners/${props.componentName}.png`}
                    alt="component demos"
                />
            </div>
        </div>
    );
}

export default memo(Banner);
