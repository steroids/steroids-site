import {ELEMENT_TO_OBSERVE_CLASS_NAME} from 'constants/classNames';
import {CATEGORY_UI} from 'constants/categories';
import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {getChildrenItemsByCategory, getClassSelector, getIdSelector, scrollToElement, scrollToTop} from 'utils/utils';
import {useCollision} from 'hooks/useCollision';
import {useUIComponentInfo} from 'hooks/useUIComponentInfo';
import ComponentInfoTabs from 'enums/ComponentInfoTabs';
import {useDocsPageData} from 'hooks/useDocsPageData';
import ComponentPropsInfo from './views/ComponentPropsInfo';
import Banner from './views/Banner';
import ComponentDescription from './views/ComponentDescription';
import TabGroupView from './views/TabGroupView';

import './UiComponentInfo.scss';
import Link from '@steroidsjs/core/ui/nav/Link';

interface IUiComponentInfoProps {
    demosComponents: any;
}

export default function UiComponentInfo(props: IUiComponentInfoProps) {
    const bem = useBem('UiComponentInfo');
    const triggerElementRef = React.useRef(null);
    const [tab, setTab] = React.useState<ComponentInfoTabs>(ComponentInfoTabs.DESCRIPTION);
    const {treeItems} = useDocsPageData();

    const {
        selectedDemo,
        setSelectedDemo,
        componentName,
        demos,
        componentInfo,
    } = useUIComponentInfo(props.demosComponents);

    React.useEffect(() => {
        scrollToTop();
    }, [componentInfo]);

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

    const renderDefaultUiComponentInfo = () => (
        <div className={bem.element('default')}>
            <h2>{__('Сводка документации:')}</h2>
            <ul>
                {getChildrenItemsByCategory(treeItems, CATEGORY_UI, true)?.map((gettingStartedItem, gettingStartedItemIndex) => (
                    <li key={gettingStartedItemIndex}>
                        <Link
                            {...gettingStartedItem}
                            label={__(gettingStartedItem.label)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className={bem.block()}>
            {componentInfo && (
                <>
                    <Banner
                        componentName={componentName}
                    />
                    <ButtonGroup
                        view={TabGroupView}
                        items={ComponentInfoTabs}
                        onClick={setTab}
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
            {!componentInfo && renderDefaultUiComponentInfo()}
        </div>
    );
}
