import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import {createCards} from '../../../../../data/indexPageData';
import CreateCard from '../CreateCard';

import './CreateSection.scss';

export default function CreateSection() {
    const bem = useBem('CreateSection');

    return (
        <Section
            title="Создавайте со Steroid-ами"
            description="Наш Open-Source фреймворк Steroids&nbsp;&mdash;
                это экосистема на&nbsp;основе React
                и&nbsp;Redux с&nbsp;большим набором готовых компонентов,
                уникальной архитектурой, UI&nbsp;Kit и&nbsp;SSR"
            className={bem.block()}
        >
            <div className={bem.element('cards')}>
                {createCards.map((card, cardIndex) => (
                    <CreateCard
                        key={cardIndex}
                        {...card}
                    />
                ))}
            </div>
        </Section>
    );
}
