/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

import './IndexPage.scss';
import {useBem} from '@steroidsjs/core/hooks';

import Tree from '@steroidsjs/core/ui/nav/Tree';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {ROUTE_ROOT} from 'routes';

import _set from 'lodash-es/set';
import _get from 'lodash-es/get';
import _upperFirst from 'lodash-es/upperFirst';
import ClientStorageComponent from '@steroidsjs/core/components/ClientStorageComponent';

const CATEGORY_UI = 'ui';

export default function IndexPage() {
    const bem = useBem('IndexPage');
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
        const demosContext = require.context('../../ui/', true, /demo\/([^/]+\.tsx?)$/);
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

    const onClickTreeItem = (event: React.MouseEvent) => {
        if (!event || !event.target) return;

        console.log(event);
    };

    return (

        <div className={bem.block()}>
            <div className={bem.element('tree')}>
                <Tree items={treeItems} onItemClick={e => onClickTreeItem(e)} />
            </div>
            <div className={bem.element('content')}>Some component</div>
        </div>
    );
}
