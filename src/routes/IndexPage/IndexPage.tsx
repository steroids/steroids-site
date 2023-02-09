/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import {useTreeItems} from '../../hooks/useTreeItems';
import AllSizes from 'ui/content/Avatar/demo/all-sizes';

import './IndexPage.scss';

export default function IndexPage() {
    const bem = useBem('IndexPage');
    const treeItems = useTreeItems();

    return (

        <div className={bem.block()}>
            <div className={bem.element('tree')}>
                <Tree items={treeItems} />
            </div>
            <div className={bem.element('content')}>
                <AllSizes />
            </div>
        </div>
    );
}
