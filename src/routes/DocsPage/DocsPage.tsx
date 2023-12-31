import {CATEGORY_COMPONENT, CATEGORY_GETTING_STARTED, CATEGORY_UI} from 'constants/categories';
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam, getRouteParams} from '@steroidsjs/core/reducers/router';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {scrollToTop} from 'utils/utils';
import {useSelectedItemId} from 'hooks/useSelectedItemId';
import ComponentInfo from './views/ComponentInfo';
import UiComponentInfo from './views/UiComponentInfo';
import GettingStarted from './views/GettingStarted';
import CustomTree from '../../shared/CustomTree';

import './DocsPage.scss';

export default function DocsPage() {
    const bem = useBem('DocsPage');
    const {treeItems, demosComponents} = useDocsPageData();

    const category = useSelector(state => getRouteParam(state, CATEGORY_ROUTE_PARAM));
    const params = useSelector(state => getRouteParams(state));
    const selectedItemId = useSelectedItemId();

    // React.useEffect(() => {
    //     if (!category) {
    //         dispatch(goToRoute(ROUTE_DOCS, {
    //             [LANGUAGE_ROUTE_PARAM]: locale.language,
    //             [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
    //         }));
    //     }
    // }, [category, dispatch, locale]);

    React.useEffect(() => {
        scrollToTop();
    }, [params]);

    return (
        <div className={bem.block()}>
            <div className={bem.element('sidebar')}>
                <Tree
                    view={CustomTree}
                    items={treeItems}
                    alwaysOpened
                    selectedItemId={selectedItemId}
                />
            </div>
            <div className={bem.element('content')}>
                {category === CATEGORY_UI && (
                    <UiComponentInfo demosComponents={demosComponents} />
                )}
                {category === CATEGORY_COMPONENT && (
                    <ComponentInfo />
                )}
                {category === CATEGORY_GETTING_STARTED && (
                    <GettingStarted />
                )}
            </div>
        </div>
    );
}
