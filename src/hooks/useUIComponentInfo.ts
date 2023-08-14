import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import {getComponentNameByRouteParam, getDemosByRouteParam} from 'helpers/demosHelpers';
import React from 'react';
import {IEntityInfo} from 'types/IEntityInfo';

export const useUIComponentInfo = (demosComponents: any) => {
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentName: string = getComponentNameByRouteParam(routeParam);
    const componentInfo: IEntityInfo = autoDocs.interfaces[`I${componentName}Props`];

    const demos = React.useMemo(
        () => getDemosByRouteParam(demosComponents, routeParam),
        [demosComponents, routeParam],
    );

    const demosAnchors = React.useMemo(() => {
        if (!demos) {
            return null;
        }

        return demos.map((demo) => ({id: demo.id, label: demo.title}));
    }, [demos]);

    const [selectedDemo, setSelectedDemo] = React.useState<any>(demosAnchors[0]?.id);

    React.useEffect(() => {
        setSelectedDemo(demosAnchors[0]?.id);
    }, [demosAnchors]);

    return {
        routeParam,
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        demosAnchors,
        componentInfo,
    };
};
