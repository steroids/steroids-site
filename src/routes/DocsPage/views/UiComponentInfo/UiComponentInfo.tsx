import {ELEMENT_TO_OBSERVE_CLASS_NAME} from 'constants/classNames';

import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import {useBem, useSelector} from '@steroidsjs/core/hooks';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {getClassSelector, getIdSelector, scrollToElement} from 'utils/utils';

import {useCollision} from 'hooks/useCollision';
import {useUIComponentInfo} from 'hooks/useUIComponentInfo';
import ComponentInfoTabs from 'enums/ComponentInfoTabs';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';
import ComponentDescription from './views/ComponentDescription';
import TabGroupView from './views/TabGroupView';
import UiComponentsOverview from './views/UiComponentsOverview';

import './UiComponentInfo.scss';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    const bem = useBem('UiComponentInfo');
    const triggerElementRef = React.useRef(null);
    const [tab, setTab] = React.useState<string>(ComponentInfoTabs.DESCRIPTION);
    const path = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));

    const {
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        componentInfo,
    } = useUIComponentInfo(props.demosComponents);

    const hasContent = React.useMemo(() => !!(componentInfo || demos.length), [componentInfo, demos]);

    const {toggleOffCollision} = useCollision(
        triggerElementRef,
        (el) => setSelectedDemo(el.id),
        getClassSelector(ELEMENT_TO_OBSERVE_CLASS_NAME),
        true,
    );

    const handleSelect = React.useCallback((id: string) => {
        toggleOffCollision();
        setSelectedDemo(id);
        scrollToElement(getIdSelector(id));
    }, [setSelectedDemo, toggleOffCollision]);

    React.useEffect(() => {
        setTab(ComponentInfoTabs.getDefaultTab());
    }, [path]);

    return (
        <div className={bem.block()}>
            {hasContent && (
                <>
                    <Banner
                        componentName={componentName}
                    />
                    <ButtonGroup
                        view={TabGroupView}
                        items={ComponentInfoTabs}
                        activeButton={tab}
                        onClick={(newTab: string) => setTab(newTab)}
                        className={bem.element('tabs')}
                    />
                    <div className={bem.element('content')}>
                        {tab === ComponentInfoTabs.DESCRIPTION ? (
                            <ComponentDescription
                                componentInfo={componentInfo}
                                componentName={componentName}
                                demos={demos}
                                handleSelect={handleSelect}
                                selectedDemo={selectedDemo}
                            />
                        )
                            : (
                                <ComponentPropsInfo
                                    componentInfo={componentInfo}
                                />
                            )}
                    </div>
                    <span
                        className={bem.element('trigger')}
                        ref={triggerElementRef}
                    />
                </>
            )}
            {!hasContent && <UiComponentsOverview />}
        </div>
    );
}
