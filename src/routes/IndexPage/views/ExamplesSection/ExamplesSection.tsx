/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Slider from '@steroidsjs/core/ui/content/Slider/Slider';
import {Options} from '@splidejs/react-splide';
import Section from 'shared/Section';
import {useScreen} from '@steroidsjs/core/hooks';
import {examplesCards} from '../../../../data/indexPageData';
import ExampleCard from './views/ExampleCard';

import './ExamplesSection.scss';

const SLIDER_OPTIONS: Options = {
    type: 'slide',
    gap: '16px',
    drag: 'free',
    arrows: false,
    pagination: false,
    resetProgress: false,
};

const MAX_SCREEN_WIDTH_FOR_RENDER_SLIDER = 1919;

export default function ExamplesSection() {
    const bem = useBem('ExamplesSection');
    const {width} = useScreen();

    const isSlider = React.useMemo(
        () => width <= MAX_SCREEN_WIDTH_FOR_RENDER_SLIDER,
        [width],
    );

    return (
        <Section className={bem.block()}>
            {!isSlider ? examplesCards.map((cardItem, cardIndex) => (
                <ExampleCard
                    item={cardItem}
                    key={cardIndex}
                />
            )) : (
                <Slider
                    sliderOptions={SLIDER_OPTIONS}
                    items={examplesCards}
                    itemView={ExampleCard}
                />
            )}
        </Section>
    );
}
