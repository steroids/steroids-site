/* eslint-disable no-multi-str */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Button} from '@steroidsjs/core/ui/form';
import {useScreen} from '@steroidsjs/core/hooks';
import {ROUTE_DOCS} from 'constants/routes';
import {goToRoute} from '@steroidsjs/core/actions/router';
import Section from 'shared/Section';
import {Text} from '@steroidsjs/core/ui/typography';
import AnimatedIcons from './views/AnimatedIcons';
import HeroTitle from './views/HeroTitle';
import {githubLink, heroDescription} from '../../../../data/indexPageData';

import './HeroSection.scss';

export default function HeroSection() {
    const bem = useBem('HeroSection');
    const {isPhone} = useScreen();

    return (
        <Section className={bem.block()}>
            <HeroTitle />
            <div className={bem.element('buttons')}>
                <Button
                    label={__('Начать')}
                    toRoute={ROUTE_DOCS}
                />
                <Button
                    url={githubLink}
                    target='_blank'
                    label={isPhone() ? __('Перейти в Git') : __('Перейти на Github')}
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
