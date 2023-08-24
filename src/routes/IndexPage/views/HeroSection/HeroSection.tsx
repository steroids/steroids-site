/* eslint-disable no-multi-str */
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import {ROUTE_DOCS} from 'constants/routes';
import {CATEGORY_GETTING_STARTED} from 'constants/categories';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Button} from '@steroidsjs/core/ui/form';
import Section from 'shared/Section';
import {Text} from '@steroidsjs/core/ui/typography';
import {useComponents, useScreen} from '@steroidsjs/core/hooks';
import AnimatedIcons from './views/AnimatedIcons';
import HeroTitle from './views/HeroTitle';
import {githubLink, heroDescription} from '../../../../data/indexPageData';

import './HeroSection.scss';

export default function HeroSection() {
    const bem = useBem('HeroSection');
    const {isPhone} = useScreen();
    const heroSectionRef = React.useRef<HTMLElement>(null);
    const {locale} = useComponents();

    return (
        <Section
            className={bem.block()}
            sectionRef={heroSectionRef}
        >
            <HeroTitle />
            <div className={bem.element('buttons')}>
                <Button
                    label={__('Начать')}
                    toRoute={ROUTE_DOCS}
                    toRouteParams={{
                        [LANGUAGE_ROUTE_PARAM]: locale.language,
                        [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
                    }}
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
            <AnimatedIcons heroSectionRef={heroSectionRef} />
        </Section>
    );
}
