import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import {resourcesCards, resourcesDescription} from '../../../../data/indexPageData';
import ResourceCard from './views/ResourcesCard';

import './ResourcesSection .scss';

export default function ResourcesSection() {
    const bem = useBem('ResourcesSection');

    return (
        <Section
            title={__('Создавайте со Steroid-ами')}
            description={resourcesDescription}
            className={bem.block()}
        >
            <div className={bem.element('cards')}>
                {resourcesCards.map((card, cardIndex) => (
                    <ResourceCard
                        key={cardIndex}
                        {...card}
                    />
                ))}
            </div>
        </Section>
    );
}
