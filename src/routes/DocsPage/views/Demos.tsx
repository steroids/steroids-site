/* eslint-disable react/function-component-definition */
import React, {useEffect, useState, ReactElement} from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import _upperFirst from 'lodash-es/upperFirst';
import {CATEGORY_UI} from 'constants/category';
import {AVATAR_DEMOS_NAME} from 'constants/demos';

import DemoCard from './DemoCard';

import './Demos.scss';

interface IDemosProps {
    demosComponents: any;
}

function Demos({demosComponents}: IDemosProps) {
    const bem = useBem('Demos');
    const globalState = useSelector(state => state);
    const [currentMatchParams, setCurrentMatchParams] = useState<Record<'category' | 'path', any>>({
        category: '',
        path: '',
    });

    useEffect(() => {
        if (!currentMatchParams) return;
        setCurrentMatchParams(globalState.router.match.params);
    }, [globalState.router]);

    const renderAvatarDemos = (): ReactElement => {
        const avatarDemos: (() => React.ReactElement)[] = Object.values(demosComponents[AVATAR_DEMOS_NAME]);
        const avatarTitles = Object.keys(demosComponents[AVATAR_DEMOS_NAME]);

        return (
            <>
                {avatarDemos.map((demo, i) => demo
                    && <DemoCard key={i} demo={demo} title={_upperFirst(avatarTitles[i])} description='description' />)}
            </>
        );
    };

    return (
        <div className={bem.block()}>
            {currentMatchParams.category === CATEGORY_UI && currentMatchParams.path === AVATAR_DEMOS_NAME && renderAvatarDemos()}
        </div>
    );
}
export default Demos;
