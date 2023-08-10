import React from 'react';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {getDemosAndTreeItems, getDemosTree} from 'helpers/demosHelpers';
import {getComponentsTreeItem, getGettingStartedTreeItem, getUiComponentTreeItem} from 'helpers/treeItems';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {useComponents} from '@steroidsjs/core/hooks';

export const useDocsPageData = () => {
    const [treeItems, setTreeItems] = React.useState<INavItem[]>([]);
    const [demosComponents, setDemosComponents] = React.useState({});
    const {locale} = useComponents();

    React.useEffect(() => {
        const demosTree = getDemosTree();
        const {demos, demosTreeItems} = getDemosAndTreeItems(demosTree, locale.language);

        setDemosComponents(demos);
        setTreeItems([
            getGettingStartedTreeItem(),
            getComponentsTreeItem(autoDocs, locale.language),
            getUiComponentTreeItem(demosTreeItems),
        ]);
    }, [locale]);

    return {
        treeItems,
        demosComponents,
    };
};
