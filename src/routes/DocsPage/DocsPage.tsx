/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {useBem} from '@steroidsjs/core/hooks';
import {useDocsPageData} from 'hooks/useDocsPageData';

import './DocsPage.scss';

export default function DocsPage() {
    const bem = useBem('DocsPage');
    const {treeItems, demosComponents} = useDocsPageData();

    return (
        <div className={bem.block()}>
            <div className={bem.element('tree')}>
                <Tree items={treeItems} />
            </div>
            <div className={bem.element('content')}>
                Some components
            </div>
        </div>
    );
}
