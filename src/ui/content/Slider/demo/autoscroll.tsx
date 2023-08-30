/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Slider from '@steroidsjs/core/ui/content/Slider/Slider';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import {itemView, items} from './basic';

import './slider-demo.scss';

/**
 * Расширение слайдера с помощью autoScroll Slider
 * @order 2
 * @col 6
 */

export default () => (
    <>
        <Slider
            className='slider-demo'
            sliderOptions={{
                type: 'loop',
                hasTrack: true,
                autoWidth: true,
            }}
            extensions={{
                AutoScroll,
            }}
            autoScroll={{
                pauseOnHover: true,
                pauseOnFocus: true,
                rewind: false,
                speed: 0.1,
            }}
            items={items}
            itemView={itemView}
        />
    </>
);
