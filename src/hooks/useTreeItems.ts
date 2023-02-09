import React from 'react';
import _upperFirst from 'lodash-es/upperFirst';
import _set from 'lodash-es/set';
import _get from 'lodash-es/get';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {ROUTE_ROOT} from 'routes';

const CATEGORY_UI = 'ui';

export const useTreeItems = () => {
    const [treeItems, setTreeItems] = React.useState<INavItem[]>([
        {
            id: CATEGORY_UI,
            label: 'UI компоненты',
            toRoute: ROUTE_ROOT,
            toRouteParams: {category: CATEGORY_UI},
            items: [] as INavItem[],
        },
    ]);

    React.useEffect(() => {
        const demosContext = require.context('../ui/', true, /demo\/([^/]+\.tsx?)$/);
        const demosTree = {};

        demosContext.keys()
            .map(fileName => {
                const matches = fileName.match(/^\.\/(.*)\/demo\/([^^/]+)\.(js|ts)x?$/);
                if (matches) {
                    const path = matches[1].split(/\//g);
                    const demoName = matches[2];
                    const key = path.join('.items.');
                    const id = path[path.length - 1];

                    if (!_get(demosTree, key)) {
                        _set(demosTree, key, {id, path});
                    }
                    _set(demosTree, key.split('.').concat(['demos', demoName]), demosContext(fileName).default);
                }
            })
            .filter(Boolean);

        const demos = {};
        const demosToItems = obj => Object.keys(obj || {}).map(id => {
            const item = obj[id];
            const path = item.path ? item.path.join('-') : null;
            if (path) {
                demos[path] = item.demos;
            }
            return {
                id,
                label: _upperFirst(id),
                items: demosToItems(item.items),
                toRoute: !item.items ? ROUTE_ROOT : null,
                toRouteParams: !item.items ? {category: CATEGORY_UI, path} : null,
            };
        });

        setTreeItems([{
            id: CATEGORY_UI,
            label: 'UI компоненты',
            items: demosToItems(demosTree),
        }]);
    }, []);

    return treeItems;
};
