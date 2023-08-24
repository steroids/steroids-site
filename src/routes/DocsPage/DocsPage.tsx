import {CATEGORY_COMPONENT, CATEGORY_GETTING_STARTED, CATEGORY_UI} from 'constants/categories';
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import {ROUTE_DOCS} from 'constants/routes';
import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {useBem, useComponents, useDispatch, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam, getRouteParams} from '@steroidsjs/core/reducers/router';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {scrollToTop} from 'utils/utils';
import ComponentInfo from './views/ComponentInfo';
import UiComponentInfo from './views/UiComponentInfo';
import GettingStarted from './views/GettingStarted';
import CustomTree from '../../shared/CustomTree';

import './DocsPage.scss';

export default function DocsPage() {
    const bem = useBem('DocsPage');
    const {locale} = useComponents();
    const dispatch = useDispatch();
    const {treeItems, demosComponents} = useDocsPageData();

    const category = useSelector(state => getRouteParam(state, CATEGORY_ROUTE_PARAM));
    const params = useSelector(state => getRouteParams(state));

    React.useEffect(() => {
        if (!category) {
            dispatch(goToRoute(ROUTE_DOCS, {
                [LANGUAGE_ROUTE_PARAM]: locale.language,
                [CATEGORY_ROUTE_PARAM]: CATEGORY_GETTING_STARTED,
            }));
        }
    }, [category, dispatch, locale]);

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
