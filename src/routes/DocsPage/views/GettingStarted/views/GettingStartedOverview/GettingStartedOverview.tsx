import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './GettingStartedOverview.scss';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {getChildrenItemsByCategory, getUiComponentBannerPathByTheme} from 'utils/utils';
import {CATEGORY_GETTING_STARTED} from 'constants/categories';
import {useTheme} from '@steroidsjs/core/hooks';
import OverviewBlock from 'shared/OverviewBlock';

const GETTING_STARTED_LIST_ID = 'GettingStartedOverview';
// eslint-disable-next-line max-len
const GETTING_STARTED_DESCRIPTION = __('Мы собрали здесь всю полезную информацию о начале работы со Steroids, \n чтобы помочь вам быстрее освоить фреймворк');

export default function GettingStartedOverview() {
    const bem = useBem('GettingStartedOverview');
    const {treeItems} = useDocsPageData();
    const {theme} = useTheme();

    const gettingStartedItems = React.useMemo(
        () => getChildrenItemsByCategory(treeItems, CATEGORY_GETTING_STARTED)?.map(gettingStartedCategoryItem => ({
            ...gettingStartedCategoryItem,
            imagePath: '/images',
        })),
        [treeItems],
    );

    return (
        <OverviewBlock
            className={bem.block()}
            listId={GETTING_STARTED_LIST_ID}
            items={gettingStartedItems}
            title={__('Начало работы')}
            description={GETTING_STARTED_DESCRIPTION}
        />
    );
}
