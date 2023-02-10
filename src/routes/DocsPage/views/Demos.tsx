import React, {useEffect, useState, ReactElement} from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParams} from '@steroidsjs/core/reducers/router';
import _upperFirst from 'lodash-es/upperFirst';
import DemoCard from './DemoCard';

import './Demos.scss';

interface IDemosProps {
    demosComponents: any;
}

function Demos({demosComponents}: IDemosProps) {
    const bem = useBem('Demos');
    const state = useSelector(stateSelector => stateSelector);
    const [currentMatchParams, setCurrentMatchParams] = useState<Record<'category' | 'path', string>>(getRouteParams(state));

    useEffect(() => {
        if (!currentMatchParams) return;
        setCurrentMatchParams(getRouteParams(state));
    }, [state.router, currentMatchParams, state]);

    const renderDemos = (): ReactElement => {
        const currentDemosKey = currentMatchParams.path;
        const demos: (() => React.ReactElement)[] = Object.values(demosComponents[currentDemosKey]);
        const titles = Object.keys(demosComponents[currentDemosKey]);

        return (
            <>
                {demos.map((demo, i) => demo
                    && <DemoCard key={i} demo={demo} title={_upperFirst(titles[i])} description='description' />)}
            </>
        );
    };

    return (
        <div className={bem.block()}>
            {currentMatchParams.category && currentMatchParams.path && renderDemos()}
        </div>
    );
}

export default Demos;
