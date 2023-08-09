import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {scrollToElement, scrollToTop} from 'utils/utils';
import {useCollision} from 'hooks/useCollision';
import {useUIComponentInfo} from 'hooks/useUIComponentInfo';
import {useScrollToTop} from 'hooks/useScrollToTop';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';
import ComponentDescription from './views/ComponentDescription';
import TabGroupView from './views/TabGroupView';

import './UiComponentInfo.scss';

const ELEMENTS_TO_OBSERVE_CLASS = '.element-to-observe';

const TABS_ITEMS = [
    {
        id: 'description',
        label: 'bookmark',
    },
    {
        id: 'props',
        label: 'file',
    },
];

type TabType = 'description' | 'props';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    useScrollToTop();

    const bem = useBem('UiComponentInfo');
    const triggerElementRef = React.useRef(null);
    const [tab, setTab] = React.useState<TabType>('description');

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

    const handleTabChanges = React.useCallback((newTab: TabType) => {
        setTab(newTab);
    }, []);

    if (!routeParam) {
        return null;
    }

    return (
        <div className={bem.block()}>
            <Banner componentName={componentName} />
            <ButtonGroup
                view={TabGroupView}
                items={TABS_ITEMS}
                onClick={handleTabChanges}
                className={bem.element('tabs')}
            />
            <div className={bem.element('content')}>
                {tab === 'description' ? (
                    <ComponentDescription
                        demosAnchors={demosAnchors}
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
        </div>
    );
}
