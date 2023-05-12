import React from 'react';
import _upperFirst from 'lodash-es/upperFirst';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import _last from 'lodash-es/last';
import DemoCard from '../DemoCard';
import ApiTable from '../ApiTable';

import './Demos.scss';

interface IDemosProps {
    demosComponents: any;
}

const getComponentNameByRouteParam = (routeParam: string) => _last(routeParam?.split('-'));

const toDemoFormat = ([title, component]) => ({
    title: _upperFirst(title.replaceAll('-', ' ')),
    component,
});

const getDemosByRouteParam = (
    demos: Record<string, any>,
    routeParam: string,
) => Object
    .entries(demos[routeParam] || {})
    .map(toDemoFormat);

export default function Demos(props: IDemosProps) {
    const bem = useBem('Demos');
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentInfo = autoDocs.interfaces[`I${getComponentNameByRouteParam(routeParam)}Props`];

    const demos = React.useMemo(
        () => getDemosByRouteParam(props.demosComponents, routeParam),
        [props, routeParam],
    );

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
            <ApiTable entityInfo={componentInfo} />
        </div>
    );
}
