import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {CATEGORY_COMPONENT, CATEGORY_UI} from 'constants/categories';
import {CATEGORY_ROUTE_PARAM} from 'constants/routeParams';
import ComponentInfo from './views/ComponentInfo';
import UiComponentInfo from './views/UiComponentInfo';

import './DocsPage.scss';

export default function DocsPage() {
    const bem = useBem('DocsPage');
    const {treeItems, demosComponents} = useDocsPageData();
    const category = useSelector(state => getRouteParam(state, CATEGORY_ROUTE_PARAM));

    return (
        <div className={bem.block()}>
            <div className={bem.element('sidebar')}>
                <Tree items={treeItems} />
            </div>
            <div className={bem.element('content')}>
                {category === CATEGORY_UI && (
                    <UiComponentInfo demosComponents={demosComponents} />
                )}
                {category === CATEGORY_COMPONENT && (
                    <ComponentInfo />
                )}
            </div>
        </div>
    );
}
