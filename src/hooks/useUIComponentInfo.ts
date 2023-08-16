import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import {getComponentNameByRouteParam, getDemosByRouteParam} from 'helpers/demosHelpers';
import React from 'react';
import {IDemo} from 'types/IDemo';
import {IEntityInfo} from 'types/IEntityInfo';

const getFirstDemoAnchorId = (demos: IDemo[]) => demos[0]?.anchor?.id;

export const useUIComponentInfo = (demosComponents: any) => {
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentName: string = getComponentNameByRouteParam(routeParam);
    const componentInfo: IEntityInfo = autoDocs.interfaces[`I${componentName}Props`];

    const demos = React.useMemo(
        () => getDemosByRouteParam(demosComponents, routeParam),
        [demosComponents, routeParam],
    );

    const [selectedDemo, setSelectedDemo] = React.useState<any>(getFirstDemoAnchorId(demos));

    React.useEffect(() => {
        setSelectedDemo(getFirstDemoAnchorId(demos));
    }, [demos]);

    return {
        routeParam,
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        componentInfo,
    };
};
