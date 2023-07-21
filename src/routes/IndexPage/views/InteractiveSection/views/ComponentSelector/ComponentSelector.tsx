import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Selector from 'shared/Selector';
import {useScreen} from '@steroidsjs/core/hooks';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentSelector.scss';

interface IComponentSelectorProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

function ComponentSelector(props: IComponentSelectorProps) {
    const bem = useBem('ComponentSelector');
    const {width} = useScreen();

    const actualComponents = React.useMemo(
        () => {
            if (width <= 410) {
                const newComponents = [...Object.keys(components)];

                return newComponents.filter((component) => component !== 'card');
            }

            return Object.keys(components);
        },
        [width],
    );

    return (
        <Selector
            items={actualComponents}
            className={bem(
                bem.block(),
                props.className,
            )}
            onClick={props.handleComponentClick}
        />
    );
}

export default memo(ComponentSelector);
