import React from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import _isEmpty from 'lodash-es/isEmpty';

import {Title} from '@steroidsjs/core/ui/typography';
import DemoCard from '../DemoCard';
import ApiTable from '../ApiTable';
import {getComponentNameByRouteParam, getDemosByRouteParam, getNestedInterfaces} from './helpers';

import './Demos.scss';

interface IDemosProps {
    demosComponents: any;
}

const API_TABLE_ID = 'apiTable';

export default function Demos(props: IDemosProps) {
    const bem = useBem('Demos');
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentInfo = autoDocs.interfaces[`I${getComponentNameByRouteParam(routeParam)}Props`];

    const nestedInterfaces = React.useMemo(() => getNestedInterfaces(componentInfo, autoDocs.interfaces), [componentInfo]);

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
            <ApiTable
                className={bem.element('table')}
                entityInfo={componentInfo}
                listId={API_TABLE_ID}
            />
            {!_isEmpty(nestedInterfaces) && (
                <div className={bem.element('nested-interfaces')}>
                    <Title content='Props interfaces' />
                    {nestedInterfaces.map((nestedInterface, nestedInterfaceIndex) => (
                        <ApiTable
                            key={nestedInterfaceIndex}
                            entityInfo={nestedInterface}
                            titleProps={{
                                content: nestedInterface.name,
                                type: 'h3',
                            }}
                            listId={routeParam + nestedInterface.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
