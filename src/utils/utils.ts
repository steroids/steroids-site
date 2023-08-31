/* eslint-disable import/no-extraneous-dependencies */
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {gsap} from 'gsap';
import _get from 'lodash-es/get';

const CHILDREN_ITEMS_PATH = '[0].items';
const CHILDREN_EXTRA_DEPTH = 1;

export const scrollToElement = (elementQuery: string) => {
    if (process.env.IS_SSR) {
        return;
    }

    gsap.to(window, {duration: 1, scrollTo: document.querySelector(elementQuery)});
};

export const getIdSelector = (id: string) => `#${id}`;
export const getClassSelector = (className: string) => `.${className}`;

export const scrollToTop = () => {
    if (process.env.IS_SSR) {
        return;
    }

    const scrollTopEnd = 0;

    // Получаем текущую позицию вертикальной прокрутки
    const currentScrollTop = document.documentElement.scrollTop;

    // Проверяем, нужно ли выполнять анимацию скроллинга
    if (currentScrollTop > scrollTopEnd) {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: scrollTopEnd,
                autoKill: false,
            },
        });
    }
};

export const getChildrenItemsByCategory = (allItems: INavItem[], category: string, extraDepth = false) => {
    const childrenItemsByCategory: INavItem[] = _get(
        allItems.filter(categoryItem => categoryItem.id === category), CHILDREN_ITEMS_PATH,
    );

    if (extraDepth) {
        return childrenItemsByCategory?.map(item => item.items).flat(CHILDREN_EXTRA_DEPTH);
    }

    return childrenItemsByCategory;
};

export const getUiComponentBannerPathByTheme = (
    componentName: string,
    theme: string,
) => `/images/banners/${theme}/${componentName.toLowerCase()}.webp`;

export const translateComponentDescription = (componentName: string, description: string) => {
    let translatedDescription;
    try {
        translatedDescription = __(description);
    } catch (error) {
        console.error('Provided componentName/description ', componentName, '+', description, 'Error: ', error);
    }

    return translatedDescription;
};
