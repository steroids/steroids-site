/* eslint-disable consistent-return */
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import _lowerFirst from 'lodash-es/lowerFirst';
import {CATEGORY_ROUTE_PARAM, PATH_ROUTE_PARAM} from 'constants/routeParams';
import {CATEGORY_COMPONENT, CATEGORY_GETTING_STARTED, CATEGORY_UI} from '../constants/categories';
import {ROUTE_DOCS} from '../constants/routes';

export const getUiComponentTreeItem = (items: INavItem[]) => ({
    id: CATEGORY_UI,
    label: __('UI компоненты'),
    toRouteParams: {
        [CATEGORY_ROUTE_PARAM]: CATEGORY_UI,
    },
    items,
});

export const getComponentsTreeItem = (autoDocs: Record<string, string>) => ({
    id: CATEGORY_COMPONENT,
    label: __('Компоненты приложения'),
    items: Object.entries(autoDocs.components || {})
        .map(([componentName]) => {
            const match = componentName.match(/^components\/(.*)Component$/);

            if (!match) {
                return;
            }
            const label = match[1];
            const id = _lowerFirst(label);

            return {
                id,
                label,
                toRoute: ROUTE_DOCS,
                toRouteParams: {
                    [CATEGORY_ROUTE_PARAM]: CATEGORY_COMPONENT,
                    [PATH_ROUTE_PARAM]: id,
                },
            };
        })
        .filter(Boolean),
});

export const getGettingStartedTreeItem = () => ({
    id: CATEGORY_GETTING_STARTED,
    label: __('Начало работы'),
    toRoute: ROUTE_DOCS,
    toRouteParams: {
        [CATEGORY_GETTING_STARTED]: CATEGORY_GETTING_STARTED,
    },
});
