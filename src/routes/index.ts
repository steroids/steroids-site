import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import DocsPage from './DocsPage';
import IndexPage from './IndexPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_DOCS = 'docs';

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
    },
} as IRouteItem;
