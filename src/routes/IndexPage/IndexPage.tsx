/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './IndexPage.scss';
import {Icon} from '@steroidsjs/core/ui/content';
import {Button} from '@steroidsjs/core/ui/form';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            <section className={bem.element('hero')}>
                <h1 className={bem.element('hero-title')}>
                    <span className={bem.element('hero-title-letters')}>
                        Ster
                    </span>
                    <Icon
                        name="logo"
                        className={bem.element('hero-title-icon')}
                    />
                    <span className={bem.element('hero-title-letters')}>
                        ids
                    </span>
                </h1>
                <div className={bem.element('hero-buttons')}>
                    <Button label="Начать" />
                    <Button
                        label="Перейти на Github"
                        outline
                    />
                </div>
                <p className={bem.element('hero-descr')}>
                    Наш Open-Source фреймворк Steroids&nbsp;&mdash;
                    это экосистема на&nbsp;основе
                    React и Redux с&nbsp;большим
                    набором готовых компонентов,
                    уникальной архитектурой, UI&nbsp;Kit и&nbsp;SSR.
                </p>
            </section>
        </div>
    );
}
