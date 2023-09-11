/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import {CATEGORY_UI} from 'constants/categories';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {getChildrenItemsByCategory, getUiComponentBannerPathByTheme} from 'utils/utils';
import {useTheme} from '@steroidsjs/core/hooks';
import OverviewBlock from 'shared/OverviewBlock';

import './UiComponentsOverview.scss';

const UI_COMPONENTS_LIST_ID = 'UiComponentsOverview';
const UI_COMPONENTS_DESCRIPTION = __('Фреймворк Steroids предоставляет большой набор UI-компонентов для ваших web-приложений. Отличительная особенность UI-компонентов в стероидах - возможность кастомизировать отображение компонента, не изменяя его логику.');

export default function UiComponentsOverview() {
    const bem = useBem('UiComponentsOverview');
    const {treeItems} = useDocsPageData();
    const {theme} = useTheme();

    const uiComponentsItems = React.useMemo(
        () => getChildrenItemsByCategory(treeItems, CATEGORY_UI, true)?.map(uiCategoryItem => ({
            ...uiCategoryItem,
            imagePath: getUiComponentBannerPathByTheme(uiCategoryItem.label, theme),
        })),
        [theme, treeItems],
    );

    return (
        <OverviewBlock
            className={bem.block()}
            listId={UI_COMPONENTS_LIST_ID}
            items={uiComponentsItems}
            title={__('UI компоненты')}
            description={UI_COMPONENTS_DESCRIPTION}
        />
    );
}
