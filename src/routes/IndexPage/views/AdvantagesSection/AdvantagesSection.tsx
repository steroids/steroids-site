import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import AdvantageCard from './views/AdvantageCard';
import {advantagesCards, advantagesDescription} from '../../../../data/indexPageData';

import './AdvantagesSection.scss';

export default function AdvantagesSection() {
    const bem = useBem('AdvantagesSection');

    return (
        <Section
            title={__('Преимущества')}
            description={advantagesDescription}
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
