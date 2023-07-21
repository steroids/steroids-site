import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import HeroSection from './views/HeroSection';
import FeaturesSection from './views/FeaturesSection';
import AdvantagesSection from './views/AdvantagesSection';
import ResourcesSection from './views/ResourcesSection';
import ExamplesSection from './views/ExamplesSection';
import InteractiveSection from './views/InteractiveSection';

import './IndexPage.scss';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            <HeroSection />
            <FeaturesSection />
            <ExamplesSection />
            <AdvantagesSection />
            <InteractiveSection />
            <ResourcesSection />
        </div>
    );
}
