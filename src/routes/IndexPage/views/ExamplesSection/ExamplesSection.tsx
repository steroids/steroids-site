import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './ExamplesSection.scss';
import Section from 'shared/Section';
import {examplesCards} from '../../../../../data/indexPageData';
import ExampleCard from '../ExampleCard';

export default function ExamplesSection() {
    const bem = useBem('ExamplesSection');

    return (
        <Section className={bem.block()}>
            {examplesCards.map((card, cardIndex) => (
                <ExampleCard
                    {...card}
                    key={cardIndex}
                />
            ))}
        </Section>
    );
}
