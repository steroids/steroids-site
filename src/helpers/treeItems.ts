/* eslint-disable consistent-return */
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM, PATH_ROUTE_PARAM} from 'constants/routeParams';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import _lowerFirst from 'lodash-es/lowerFirst';
import GettingStartedArticles from 'enums/GettingStartedArticles';
import {CATEGORY_COMPONENT, CATEGORY_GETTING_STARTED, CATEGORY_UI} from '../constants/categories';
import {ROUTE_DOCS} from '../constants/routes';

export const getUiComponentTreeItem = (items: INavItem[]) => ({
    id: CATEGORY_UI,
    label: __('UI компоненты'),
    items,
});

export const getComponentsTreeItem = (autoDocs: Record<string, string>, language: string) => ({
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
                    [LANGUAGE_ROUTE_PARAM]: language,
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
    items: GettingStartedArticles.getItems().map((articleItem) => ({
        ...articleItem,
        toRoute: ROUTE_DOCS,
        toRouteParams: {
            [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
            [PATH_ROUTE_PARAM]: articleItem.id,
        },
    })),
});
