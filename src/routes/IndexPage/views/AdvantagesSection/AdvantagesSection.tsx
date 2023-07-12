import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import AdvantageCard from '../AdvantageCard';
import {advantagesCards} from '../../../../../data/indexPageData';

import './AdvantagesSection.scss';

export default function AdvantagesSection() {
    const bem = useBem('AdvantagesSection');

    return (
        <Section
            title="Преимущества"
            description="Наш Open-Source
                фреймворк Steroids&nbsp;&mdash;
                это экосистема на&nbsp;основе
                React и&nbsp;Redux с&nbsp;большим набором готовых
                компонентов, уникальной архитектурой, UI&nbsp;Kit и&nbsp;SSR"
            className={bem.block()}
        >
            <div className={bem.element('cards')}>
                {advantagesCards.map((card, cardIndex) => (
                    <AdvantageCard
                        key={cardIndex}
                        {...card}
                    />
                ))}
            </div>
        </Section>
    );
}
