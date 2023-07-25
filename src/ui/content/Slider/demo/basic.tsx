import * as React from 'react';
import Slider from '@steroidsjs/core/ui/content/Slider/Slider';

export const items = [
    {
        img: 'https://img1.goodfon.ru/original/1920x1080/b/79/england-sheffield-park-lake.jpg',
    },
    {
        img: 'https://img5.goodfon.ru/original/1920x1080/b/d7/gory-ozero-derevia-priroda-oblaka-otrazhenie.jpg',
    },
    {
        img: 'https://img5.goodfon.ru/original/1920x1080/3/7d/khizhina-peizazh-priroda-les-derevia.jpg',
    },
    {
        img: 'https://img1.goodfon.ru/original/1920x1080/f/17/nature-landscape-scenery-3899.jpg',
    },
];

export const itemView = (props) => (
    <div style={{width: 480, height: 270, display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center'}}>
        <img
            style={{width: '100%', height: '100%'}}
            src={props.item.img}
            alt="test"
        />
    </div>
);

/**
 * Базовое представление Slider
 * @order 1
 * @col 6
 */

export default () => (
    <>
        <Slider
            style={{width: '400px'}}
            sliderOptions={{
                type: 'loop',
                hasTrack: true,
                autoWidth: true,
            }}
            items={items}
            itemView={itemView}
        />
    </>
);
