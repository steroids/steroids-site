/* eslint-disable max-len */
import {CATEGORY_GETTING_STARTED} from 'constants/categories';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {getChildrenItemsByCategory} from 'utils/utils';
import OverviewBlock from 'shared/OverviewBlock';

import './GettingStartedOverview.scss';
import {GETTING_STARTED_OVERVIEW_ITEMS} from 'data/docsPageData';

const GETTING_STARTED_LIST_ID = 'GettingStartedOverview';
const GETTING_STARTED_DESCRIPTION = __('Мы собрали здесь всю полезную информацию о начале работы со Steroids, \n чтобы помочь вам быстрее освоить фреймворк');

export default function GettingStartedOverview() {
    const bem = useBem('GettingStartedOverview');
    const {treeItems} = useDocsPageData();

    const gettingStartedItems = React.useMemo(
        () => getChildrenItemsByCategory(treeItems, CATEGORY_GETTING_STARTED)?.map(gettingStartedCategoryItem => ({
            ...gettingStartedCategoryItem,
            imagePath: '/images',
            ...GETTING_STARTED_OVERVIEW_ITEMS[gettingStartedCategoryItem.id],
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
