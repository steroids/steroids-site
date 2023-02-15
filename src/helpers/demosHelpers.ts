import _upperFirst from 'lodash-es/upperFirst';
import _set from 'lodash-es/set';
import _get from 'lodash-es/get';
import {CATEGORY_UI} from 'constants/categories';
import {ROUTE_DOCS} from 'constants/routes';

const addToDemosTree = (demosContext: any, demosTree: Record<string, any>) => (fileName: string) => {
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
};

export const getDemosTree = () => {
    const demosContext = require.context('../ui/', true, /demo\/([^/]+\.tsx?)$/);
    const demosTree = {};

    demosContext
        .keys()
        .forEach(addToDemosTree(demosContext, demosTree));

    return demosTree;
};

export const getDemosAndTreeItems = (demosTree: Record<string, any>) => {
    const demos = {};

    const demosToItems = _demosTree => Object
        .keys(_demosTree || {})
        .map(demosTreeItemId => {
            const item = _demosTree[demosTreeItemId];
            const path = item.path ? item.path.join('-') : null;

            if (path) {
                demos[path] = item.demos;
            }

            return {
                id: demosTreeItemId,
                label: _upperFirst(demosTreeItemId),
                items: demosToItems(item.items),
                toRoute: !item.items ? ROUTE_DOCS : null,
                toRouteParams: !item.items ? {category: CATEGORY_UI, path} : null,
            };
        });

    const demosTreeItems = demosToItems(demosTree);

    return {
        demos,
        demosTreeItems,
    };
};
