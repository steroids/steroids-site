import {ELEMENT_TO_OBSERVE_CLASS_NAME} from 'constants/classNames';

import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {getClassSelector, getIdSelector, scrollToElement} from 'utils/utils';

import {useCollision} from 'hooks/useCollision';
import {useUIComponentInfo} from 'hooks/useUIComponentInfo';
import ComponentInfoTabs from 'enums/ComponentInfoTabs';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';
import ComponentDescription from './views/ComponentDescription';
import TabGroupView from './views/TabGroupView';

import './UiComponentInfo.scss';
import UiComponentsOverview from './views/UiComponentsOverview';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    const bem = useBem('UiComponentInfo');
    const triggerElementRef = React.useRef(null);
    const [tab, setTab] = React.useState<ComponentInfoTabs>(ComponentInfoTabs.DESCRIPTION);

    const {
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        componentInfo,
    } = useUIComponentInfo(props.demosComponents);

    const hasContent = React.useMemo(() => !!(componentInfo || demos), [componentInfo, demos]);

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
                        onClick={(newTab: ComponentInfoTabs) => setTab(newTab)}
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
