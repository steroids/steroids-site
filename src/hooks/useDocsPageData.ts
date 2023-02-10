import React from 'react';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import {getDemosAndTreeItems, getDemosTree} from 'helpers/demosHelpers';
import {getUiComponentTreeItem} from 'constants/treeItems';

export const useDocsPageData = () => {
    const [treeItems, setTreeItems] = React.useState<INavItem[]>([]);
    const [demosComponents, setDemosComponents] = React.useState({});

    React.useEffect(() => {
        const demosTree = getDemosTree();
        const {demos, demosTreeItems} = getDemosAndTreeItems(demosTree);

        setDemosComponents(demos);
        setTreeItems([
            getUiComponentTreeItem(demosTreeItems),
        ]);
    }, []);

    return {
        treeItems,
        demosComponents,
    };
};
