import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import CustomNavigation from 'shared/DemosNavigation';
import {useScreen} from '@steroidsjs/core/hooks';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentNavigation.scss';

const HIDDEN_MOBILE_WIDTH = 410;

interface IComponentNavigationProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

function ComponentNavigation(props: IComponentNavigationProps) {
    const bem = useBem('ComponentNavigation');
    const {width} = useScreen();

    const componentsByScreenType = React.useMemo(
        () => {
            if (width <= HIDDEN_MOBILE_WIDTH) {
                const newComponents = [...Object.keys(components)];
                return newComponents.filter((component) => !components[component].isHiddenOnMobile);
            }

            return Object.keys(components);
        },
        [width],
    );

    return (
        <CustomNavigation
            items={componentsByScreenType}
            className={bem(
                bem.block(),
                props.className,
            )}
            onClick={props.handleComponentClick}
        />
    );
}

export default memo(ComponentNavigation);
