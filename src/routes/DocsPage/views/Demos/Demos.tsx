import React from 'react';
import _upperFirst from 'lodash-es/upperFirst';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import DemoCard from '../DemoCard';

import './Demos.scss';

interface IDemosProps {
    demosComponents: any;
}

const toDemoFormat = ([title, component]) => ({
    title: _upperFirst(title),
    component,
});

const getDemosByRouteParam = (
    demos: Record<string, any>,
    routeParam: string,
) => Object
    .entries(demos[routeParam] || {})
    .map(toDemoFormat);

function Demos(props: IDemosProps) {
    const bem = useBem('Demos');
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));

    const demos = React.useMemo(
        () => getDemosByRouteParam(props.demosComponents, routeParam),
        [props, routeParam],
    );

    console.log(demos);
    

    if (!routeParam) {
        return null;
    }

    return (
        <div className={bem.block()}>
            {demos.map((demo, demoIndex) => (
                <DemoCard
                    key={demoIndex}
                    demo={demo.component}
                    title={demo.title}
                    description="description"
                />
            ))}
        </div>
    );
}

export default Demos;
