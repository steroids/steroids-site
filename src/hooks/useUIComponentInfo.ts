import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import {getComponentNameByRouteParam, getDemosByRouteParam} from 'helpers/demosHelpers';
import React from 'react';

export interface IComponentInfo {
    name: string,
    moduleName: string,
    title: string,
    description: string,
    defaultProps: any,
    extends: string[],
    tags: any,
    properties: {
        decorators: [],
        description: string, example: string,
        name: string,
        required: boolean,
        type: string
    }[]
}

export const useUIComponentInfo = (demosComponents: any) => {
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentName: string = getComponentNameByRouteParam(routeParam);
    const componentInfo: IComponentInfo = autoDocs.interfaces[`I${componentName}Props`];
    const componentSmallDescription = 'When choosing the right button for an action, consider the level of emphasis each button type provides.';

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
        componentSmallDescription,
    };
};
