import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import HeroSection from './views/HeroSection';
import FeaturesSection from './views/FeaturesSection';
import AdvantagesSection from './views/AdvantagesSection';
import CreateSection from './views/CreateSection';

import './IndexPage.scss';
import ExamplesSection from './views/ExamplesSection';
import InteractiveSection from './views/InteractiveSection';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            <HeroSection />
            <FeaturesSection />
            <ExamplesSection />
            <AdvantagesSection />
            <InteractiveSection />
            <CreateSection />
        </div>
    );
}
