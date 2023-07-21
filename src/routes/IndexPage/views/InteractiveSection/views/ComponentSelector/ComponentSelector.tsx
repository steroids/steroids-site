import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {useScreen} from '@steroidsjs/core/hooks';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentSelector.scss';

interface IComponentSelectorProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

function ComponentSelector(props: IComponentSelectorProps) {
    const bem = useBem('ComponentSelector');
    const {isPhone} = useScreen();

    const actualComponents = React.useMemo(
        () => {
            if (isPhone()) {
                const newComponents = [...Object.keys(components)];

                return newComponents.filter((component) => component !== 'card');
            }

            return Object.keys(components);
        },
        [isPhone],
    );

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <div className={bem.element('decoration')} />
            <ButtonGroup
                className={bem.element('components')}
                items={actualComponents}
                onClick={props.handleComponentClick}
                buttonProps={{
                    link: true,
                }}
            />
        </div>
    );
}

export default memo(ComponentSelector);
