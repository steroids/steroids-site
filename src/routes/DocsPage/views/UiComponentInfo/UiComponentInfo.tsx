import React from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import {Title, Text} from '@steroidsjs/core/ui/typography';
import {getComponentNameByRouteParam, getDemosByRouteParam} from 'helpers/demosHelpers';
import Selector from 'shared/Selector';
import {scrollToElement} from 'utils/utils';
import {useCollision} from 'hooks/useCollision';
import {useUIComponentInfo} from 'hooks/useUIComponentInfo';
import Demos from './views/Demos';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';

import './UiComponentInfo.scss';

const ELEMENTS_TO_OBSERVE_CLASS = '.element-to-observe';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    const bem = useBem('UiComponentInfo');
    const triggerElementRef = React.useRef(null);

    const {
        routeParam,
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        demosAnchors,
        componentInfo,
    } = useUIComponentInfo(props.demosComponents);

    const {toggleOffCollision} = useCollision(triggerElementRef, (el) => {
        setSelectedDemo(el.id);
    }, ELEMENTS_TO_OBSERVE_CLASS, true);

    const handleSelect = React.useCallback((id: string) => {
        toggleOffCollision();
        setSelectedDemo(id);
        scrollToElement(`#${id}`);
    }, [setSelectedDemo, toggleOffCollision]);

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
            <span
                className={bem.element('trigger')}
                ref={triggerElementRef}
            />
        </div>
    );
}
