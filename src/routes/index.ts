import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import {ROUTE_DOCS, ROUTE_ROOT} from 'constants/routes';
import LanguageEnum from 'enums/LanguageEnum';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import DocsPage from './DocsPage';
import IndexPage from './IndexPage';

const roles = [null];
const baseUrl = `/:${LANGUAGE_ROUTE_PARAM}(${LanguageEnum.getKeys().join('|')})?`;

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: baseUrl,
    title: 'Home',
    component: IndexPage,
    roles,
    items: {
        [ROUTE_DOCS]: {
            label: 'Documentation',
            path: baseUrl + '/docs/:category?/:path?',
            component: DocsPage,
            roles,
        },
    },
} as IRouteItem;
