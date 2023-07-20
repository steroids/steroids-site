import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import {featureCards} from '../../../../data/indexPageData';
import FeatureCard from './views/FeatureCard';

import './FeaturesSection.scss';

export default function FeaturesSection() {
    const bem = useBem('FeaturesSection');

    return (
        <Section className={bem.block()}>
            {featureCards.map((card, cardIndex) => (
                <FeatureCard
                    key={cardIndex}
                    {...card}
                />
            ))}
        </Section>
    );
}
