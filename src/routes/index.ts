import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import {ROUTE_CHANGELOG, ROUTE_DOCS, ROUTE_ROOT} from 'constants/routes';
import ChangelogPage from './ChangelogPage';
import DocsPage from './DocsPage';
import IndexPage from './IndexPage';

const roles = [null];

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    title: 'Home',
    component: IndexPage,
    roles,
    items: {
        [ROUTE_DOCS]: {
            label: 'Documentation',
            path: '/docs/:category?/:path?',
            component: DocsPage,
            roles,
        },
        [ROUTE_CHANGELOG]: {
            path: '/changelog',
            component: ChangelogPage,
            roles,
            isNavVisible: false,
        },
    },
} as IRouteItem;
