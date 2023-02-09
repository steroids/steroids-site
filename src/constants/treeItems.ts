import { INavItem } from '@steroidsjs/core/ui/nav/Nav/Nav';
import { ROUTE_ROOT } from 'routes';
import { CATEGORY_UI } from './category';

export const getUiComponentTreeItem = (items: INavItem) => ({
    id: CATEGORY_UI,
    label: 'UI компоненты',
    toRoute: ROUTE_ROOT,
    toRouteParams: {category: CATEGORY_UI},
    items,
});
