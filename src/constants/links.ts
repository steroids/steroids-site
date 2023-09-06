import {githubLink} from 'data/indexPageData';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import GettingStartedArticles from 'enums/GettingStartedArticles';
import {ROUTE_DOCS} from './routes';
import {CATEGORY_COMPONENT, CATEGORY_GETTING_STARTED, CATEGORY_UI} from './categories';
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM, PATH_ROUTE_PARAM} from './routeParams';

export const HEADER_LINKS: INavItem[] = [
    {
        toRoute: ROUTE_DOCS,
        label: __('Документация'),
        toRouteParams: {
            category: CATEGORY_UI,
        },
    },
    {
        toRoute: ROUTE_DOCS,
        label: __('Набор статей'),
        toRouteParams: {
            category: CATEGORY_GETTING_STARTED,
        },
    },
    {
        url: githubLink,
        label: __('GIT'),
        target: '_blank',
    },
];

const FOOTER_LINKS_COLUMN_1: INavItem[] = [
    {
        toRoute: ROUTE_DOCS,
        label: __('О Steroids'),
        toRouteParams: {
            [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
            [PATH_ROUTE_PARAM]: GettingStartedArticles.OVERVIEW,
        },
    },
    {
        toRoute: ROUTE_DOCS,
        label: __('Установка'),
        toRouteParams: {
            [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
            [PATH_ROUTE_PARAM]: GettingStartedArticles.INSTALLATION,
        },
    },
    {
        toRoute: ROUTE_DOCS,
        label: __('Статьи'),
        toRouteParams: {
            [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
        },
    },
];

const FOOTER_LINKS_COLUMN_2: INavItem[] = [
    {
        toRoute: ROUTE_DOCS,
        label: __('UI компоненты'),
        toRouteParams: {
            category: CATEGORY_UI,
        },
    },
    {
        toRoute: ROUTE_DOCS,
        label: __('Компоненты приложения'),
        toRouteParams: {
            category: CATEGORY_COMPONENT,
        },
    },
];

const FOOTER_LINKS_COLUMN_3: INavItem[] = [
    {
        url: githubLink,
        label: __('GitHub'),
        target: '_blank',
    },
];

export const FOOTER_LINKS_COLUMNS = [
    FOOTER_LINKS_COLUMN_1,
    FOOTER_LINKS_COLUMN_2,
    // FOOTER_LINKS_COLUMN_3,
];

export const KOZHINDEV_LINK = 'https://kozhindev.com';
