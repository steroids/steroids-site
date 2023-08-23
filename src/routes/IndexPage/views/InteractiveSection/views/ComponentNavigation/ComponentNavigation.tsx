import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import CustomNavigation from 'shared/CustomNaviagtion';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentNavigation.scss';

interface IComponentNavigationProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

function ComponentNavigation(props: IComponentNavigationProps) {
    const bem = useBem('ComponentNavigation');

    const customNavigationItems = React.useMemo(() => Object.keys(components).map(componentKey => ({
        id: componentKey,
        label: componentKey,
        className: bem.element('item', {
            isHiddenOnMobile: components[componentKey].isHiddenOnMobile,
            isHiddenOnDesktop: components[componentKey].isHiddenOnDesktop,
        }),
    })), [bem]);

    return (
        <CustomNavigation
            items={customNavigationItems}
            className={bem(
                bem.block(),
                props.className,
            )}
            onClick={props.handleComponentClick}
        />
    );
}

export default memo(ComponentNavigation);
