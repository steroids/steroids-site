import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import CustomNavigation from 'shared/CustomNaviagtion';
import {useScreen} from '@steroidsjs/core/hooks';
import _intersection from 'lodash-es/intersection';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentNavigation.scss';

const HIDDEN_MOBILE_WIDTH = 428;
const HIDDEN_DESKTOP_WIDTH = 1300;

type HiddenType = 'isHiddenOnMobile' | 'isHiddenOnDesktop';

interface IComponentNavigationProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

const formatComponentsByWidth = (width: number, breakpoint: number, listComponents: Record<string, any>, statement: HiddenType) => {
    if (width <= breakpoint) {
        const newComponents = [...Object.keys(listComponents)];
        return newComponents.filter((component) => !components[component][statement]);
    }

    return Object.keys(listComponents);
};

function ComponentNavigation(props: IComponentNavigationProps) {
    const bem = useBem('ComponentNavigation');
    const {width} = useScreen();

    const componentsByScreenType = React.useMemo(
        () => {
            const hiddenOnMobile = formatComponentsByWidth(width, HIDDEN_MOBILE_WIDTH, components, 'isHiddenOnMobile');
            const hiddenOnDesktop = formatComponentsByWidth(width, HIDDEN_DESKTOP_WIDTH, components, 'isHiddenOnDesktop');

            // Используем intersection для получения только повторяющихся элементов
            return _intersection(hiddenOnMobile, hiddenOnDesktop);
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
