import {githubLink} from 'data/indexPageData';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {ROUTE_DOCS} from './routes';
import {CATEGORY_GETTING_STARTED, CATEGORY_UI} from './categories';

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
