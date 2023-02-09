import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';

export const ROUTE_ROOT = 'root';

const roles = [null];

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    title: 'HOME',
    component: IndexPage,
    roles,
} as IRouteItem;
