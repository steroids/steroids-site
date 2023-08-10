import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Selector from 'shared/DemosNavigation';
import {useScreen} from '@steroidsjs/core/hooks';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentPicker.scss';

const HIDDEN_MOBILE_WIDTH = 410;

interface IComponentPickerProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

function ComponentPicker(props: IComponentPickerProps) {
    const bem = useBem('ComponentPicker');
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
        <Selector
            items={componentsByScreenType}
            className={bem(
                bem.block(),
                props.className,
            )}
            onClick={props.handleComponentClick}
        />
    );
}

export default memo(ComponentPicker);
