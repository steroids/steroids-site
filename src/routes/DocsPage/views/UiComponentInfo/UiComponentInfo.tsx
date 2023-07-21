import React from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {Title, Text} from '@steroidsjs/core/ui/typography';
import {getComponentNameByRouteParam, getDemosByRouteParam} from 'helpers/demosHelpers';
import Selector from 'shared/Selector';
import {scrollToElement} from 'utils/utils';
import Demos from './views/Demos';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';

import './UiComponentInfo.scss';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    const bem = useBem('UiComponentInfo');
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentName = getComponentNameByRouteParam(routeParam);
    const componentInfo = autoDocs.interfaces[`I${componentName}Props`];

    const demos = React.useMemo(
        () => getDemosByRouteParam(props.demosComponents, routeParam),
        [props, routeParam],
    );

    const demosAnchors = React.useMemo(() => {
        if (!demos) {
            return null;
        }

        return demos.map((demo) => ({id: demo.id, label: demo.title}));
    }, [demos]);

    const [selectedDemo, setSelectedDemo] = React.useState(demosAnchors[0]?.id);

    const handleSelect = (id: string) => {
        setSelectedDemo(id);
        scrollToElement(`#${id}`);
    };

    React.useEffect(() => {
        setSelectedDemo(demosAnchors[0]?.id);
    }, [demosAnchors]);

    if (!routeParam) {
        return null;
    }

    return (
        <div className={bem.block()}>
            <Banner componentName={componentName} />
            <div className={bem.element('content')}>
                <div className={bem.element('content-wrapper')}>
                    <div className={bem.element('description')}>
                        <Title content={componentName} />
                        <Text
                            className={bem.element('text')}
                            content={componentInfo?.description}
                        />
                        <Demos demos={demos} />
                    </div>
                    <Selector
                        items={demosAnchors}
                        activeButton={selectedDemo}
                        onClick={handleSelect}
                        className={bem.element('navigation')}
                    />
                </div>
                <ComponentPropsInfo
                    componentInfo={componentInfo}
                    className={bem.element('props')}
                />
            </div>
        </div>
    );
}
