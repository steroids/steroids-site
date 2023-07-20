/* eslint-disable no-multi-str */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Button} from '@steroidsjs/core/ui/form';
import {useDispatch} from '@steroidsjs/core/hooks';
import {ROUTE_DOCS} from 'constants/routes';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {Icon} from '@steroidsjs/core/ui/content';
import Section from 'shared/Section';
import {Text} from '@steroidsjs/core/ui/typography';
import AnimatedIcons from './views/AnimatedIcons';
import {githubLink, heroDescription} from '../../../../data/indexPageData';

import './HeroSection.scss';
import HeroTitle from './views/HeroTitle';

export default function HeroSection() {
    const bem = useBem('HeroSection');
    const dispatch = useDispatch();

    return (
        <Section className={bem.block()}>
            <HeroTitle />
            <div className={bem.element('buttons')}>
                <Button
                    label={__('Начать')}
                    onClick={() => dispatch(goToRoute(ROUTE_DOCS))}
                />
                <Button
                    url={githubLink}
                    target='_blank'
                    label={__('Перейти на Github')}
                    outline
                />
            </div>
            <Text
                content={heroDescription}
                className={bem.element('description')}
            />
            <AnimatedIcons />
        </Section>
    );
}
