import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Button} from '@steroidsjs/core/ui/form';
import {useDispatch} from '@steroidsjs/core/hooks';
import {ROUTE_DOCS} from 'constants/routes';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {Icon} from '@steroidsjs/core/ui/content';
import Section from 'shared/Section';
import AnimatedIcons from '../AnimatedIcons';
import {githubLink} from '../../../../../data/indexPageData';

import './HeroSection.scss';

export default function HeroSection() {
    const bem = useBem('HeroSection');
    const dispatch = useDispatch();

    const onClickStart = React.useCallback(() => {
        dispatch(goToRoute(ROUTE_DOCS));
    }, [dispatch]);

    return (
        <Section className={bem.block()}>
            <h1 className={bem.element('title')}>
                <span className={bem.element('title-letters')}>
                    Ster
                </span>
                <Icon
                    name="logo"
                    className={bem.element('title-icon')}
                />
                <span className={bem.element('title-letters')}>
                    ids
                </span>
            </h1>
            <div className={bem.element('buttons')}>
                <Button
                    label={__('Начать')}
                    onClick={onClickStart}
                />
                <Button
                    url={githubLink}
                    target='_blank'
                    label={__('Перейти на Github')}
                    outline
                />
            </div>
            <p
                className={bem.element('description')}
            >
                Наш Open-Source фреймворк Steroids&nbsp;&mdash;
                это экосистема на&nbsp;основе React и&nbsp;Redux
                с&nbsp;большим набором готовых компонентов,
                уникальной архитектурой, UI&nbsp;Kit и&nbsp;SSR.
            </p>
            <AnimatedIcons />
        </Section>
    );
}
