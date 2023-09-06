/* eslint-disable max-len */

import {CATEGORY_GETTING_STARTED} from 'constants/categories';
import {CATEGORY_ROUTE_PARAM} from 'constants/routeParams';
import {ROUTE_DOCS} from 'constants/routes';

/* eslint-disable no-multi-str */
export const githubLink = 'https://github.com/steroids/react';
export const featureCards = [
    {
        title: __('Более 70 компонентов'),
        description: __('Создавайте сложные интерфейсы в библиотеке с более 70 различных UI компонентов, с настраиваемым цветом, размером и другими характеристиками'),
        img: '/images/features/light.webp',

    },
    {
        title: __('Тёмная тема'),
        description: __('И как же без darkmode в современных интерфейсах'),
        img: '/images/features/dark.webp',
        isDark: true,
    },
];

export const advantagesCards = [
    {
        icon: 'architecture',
        description: __('Готовая архитектура проекта'),
    },
    {
        icon: 'split',
        description: __('Возможность кастомизации компонентов, благодаря разделению core и view частей'),
    },
    {
        icon: 'library',
        description: __('Обширная библиотека готовых компонентов с детальной документацией упрощающей интеграцию в проект'),
    },
    {
        icon: 'figma',
        description: __('Интуитивный дизайн-макет UI-компонентов в Figma для быстрой визуализации и адаптации под уникальные потребности'),
    },
];

export const advantagesDescription = __('Фреймворк Steroids сделает шаблонные задачи за вас \n и сократит время разработки продукта');

export const resourcesCards = [
    {
        img: 'https://i.ibb.co/6JQcWrX/Frame-338670.jpg',
        title: __('На старт'),
        description: __('Открытый код и документация, библиотека компонентов, React, Vue'),
        toRoute: ROUTE_DOCS,
        toRouteParams: {
            [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
        },
    },
    {
        img: 'https://i.ibb.co/YjFYxBr/Frame-338670-1.jpg',
        title: 'Figma Design Kit',
        description: __('Набор инструментов для создания интерфейсов для дизайнера'),
        url: 'https://www.figma.com/file/TjkRTOYiKAXlig7keXng38/Steroids-New-v2.2?type=design&node-id=2%3A1746&mode=design&t=dpI2074nD288gtUa-1',
        target: '_blank',
    },
    {
        img: 'https://i.ibb.co/PDtcKXy/Frame-338670-2.jpg',
        title: 'GitHub',
        description: __('Открытый код и документация, библиотека компонентов, React, Vue'),
        url: 'https://github.com/steroids',
        target: '_blank',
    },
];

export const resourcesDescription = __('Наш фреймворк - подходящее решение для задач вашего бизнеса');
export const examplesCards = [
    {
        label: __('Датапикер'),
        img: 'calendar',
    },
    {
        label: __('Карточка'),
        img: 'card',
    },
    {
        label: __('Пароль'),
        img: 'password',
    },
    {
        label: '',
        img: '',
        isMoreCard: true,
    },
];

export const heroDescription = __('Наш Open-Source фреймворк Steroids это экосистема на основе React и Redux с большим набором готовых компонентов, уникальной архитектурой, UI Kit и SSR.');

export const footerCredits = '© Steroids 2023';
