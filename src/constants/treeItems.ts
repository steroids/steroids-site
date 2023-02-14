import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {CATEGORY_UI} from './category';
import {ROUTE_DOCS} from './routes';

export const getUiComponentTreeItem = (items: INavItem) => ({
    id: CATEGORY_UI,
    label: 'UI компоненты',
    toRoute: ROUTE_DOCS,
    toRouteParams: {category: CATEGORY_UI},
    items,
});
