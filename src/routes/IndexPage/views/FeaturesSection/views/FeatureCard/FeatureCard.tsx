import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import {Text, Title} from '@steroidsjs/core/ui/typography';

import './FeatureCard.scss';

interface IFeatureCardProps {
    title: string;
    description: string;
    img: string;
    isDark?: boolean;
}

export default function FeatureCard(props: IFeatureCardProps) {
    const bem = useBem('FeatureCard');

    return (
        <div className={bem(
            bem.block({
                isDark: props.isDark,
            }),
        )}
        >
            <Icon
                name={props.isDark ? 'featureIconBlack' : 'featureIcon'}
                className={bem.element('icon')}
            />
            <div className={bem.element('content')}>
                <Title
                    content={props.title}
                    className={bem.element('title')}
                />
                <Text
                    content={props.description}
                    className={bem.element('description')}
                />
                <div className={bem.element('img-wrapper')}>
                    <img
                        src={props.img}
                        alt="feature"
                    />
                </div>
            </div>
        </div>
    );
}
