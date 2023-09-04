/* eslint-disable react-hooks/exhaustive-deps */
import {CATEGORY_UI} from 'constants/categories';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {getChildrenItemsByCategory, getUiComponentBannerPathByTheme} from 'utils/utils';
import {useTheme} from '@steroidsjs/core/hooks';
import OverviewBlock from 'shared/OverviewBlock';

import './UiComponentsOverview.scss';
import {useUpdateEffect} from 'react-use';

const UI_COMPONENTS_LIST_ID = 'UiComponentsOverview';
// eslint-disable-next-line max-len
const UI_COMPONENTS_DESCRIPTION = __('Фреймворк Steroids предоставляет большой набор UI-компонентов для ваших web-приложений. Отличительная особенность UI-компонентов в стероидах - возможность кастомизировать отображение компонента, не изменяя его логику.');

export default function UiComponentsOverview() {
    const bem = useBem('UiComponentsOverview');
    const {treeItems} = useDocsPageData();
    const {theme} = useTheme();
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchComponentBannerPaths = async () => {
            const uiComponents = getChildrenItemsByCategory(treeItems, CATEGORY_UI, true) || [];
            const bannerPaths = await Promise.all(
                uiComponents.map(async (uiCategoryItem) => ({
                    ...uiCategoryItem,
                    imagePath: await getUiComponentBannerPathByTheme(uiCategoryItem.label, theme),
                })),
            );
            setItems(bannerPaths);
            setIsLoading(false);
        };

        fetchComponentBannerPaths();
    }, [treeItems]);

    return (
        <OverviewBlock
            className={bem.block()}
            listId={UI_COMPONENTS_LIST_ID}
            items={items}
            title={__('UI компоненты')}
            description={UI_COMPONENTS_DESCRIPTION}
        />
    );
}
